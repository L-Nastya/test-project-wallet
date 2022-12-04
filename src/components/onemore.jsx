import PropTypes from 'prop-types';
import styled from 'styled-components';

const OneMore = ({ items , colums}) => {
    let sortedCars1 = items.sort((a, b) =>
  b.date.split('.').reverse().join().localeCompare(a.date.split('.').reverse().join()));
  console.log(sortedCars1);
    return (
      <GeneralContainer>
    <HeadTable>
             <TransactionHead >
          <tr>
            
    {
                colums.map(colum => (
                            <Transactionth width={colum.width}>
                    {colum.Header}
                            </Transactionth>
                           
                        ))
                }        
                </tr>
          </TransactionHead >
           </HeadTable>
          <Scroll>
              <BodyTable>
               <tbody>
                 {
                items.map(item => (
                        <Transactiontr key={item.id}>
                            <Transactiontd width={100}>{item.date}</Transactiontd>
                            <Transactiontd width={70}>{item.type}</Transactiontd>
                           <Transactiontd width={75}>{item.category}</Transactiontd>
                            <Transactiontd width={120}><SpanCom>{item.comment || "---"}</SpanCom></Transactiontd>
                           <Transactiontd width={85}>{item.type === "+" ? 
                            <SpanSum style={{color: "#24CCA7"}}>{item.sum}</SpanSum> :
                            <SpanSum style={{color:"#FF6596"} }>{item.sum}</SpanSum>}</Transactiontd>
                           <Transactiontd width={100}>{item.balance}</Transactiontd>
                            </Transactiontr>
                ))
                }
                   </tbody>
                  </BodyTable>
              </Scroll>
       
            </GeneralContainer>
      
        )}
    
OneMore.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        sum: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired,
    }),
  ),
};
export default OneMore;

const GeneralContainer = styled.div`
  width:704px; 
  height:312px; 
  margin-top: 20px ;
  margin-left:32px;
  margin-right: 32px;
background-color: transparent;
/* border-radius: 30px; */
 font-family: 'Circe';
  @media (min-width: 1200px) {
    width: 715px;
    margin: 46px 16px  0px 69px;
  }
`
const HeadTable = styled.table`
 height: 58px;
  border-collapse: collapse;
  width: 715px;
  table-layout: fixed;
  border-radius: 30px;
  background-color: #ffff; 
  `

  const TransactionHead = styled.thead`
    background-color: #ffff; 
    padding: 16px 20px 15px 20px;
`;

const Transactionth = styled.th`
border-radius: 30px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #000000;
/* border: 1px solid black; */
text-align: start;

:nth-last-child(-n + 2){
 text-align: end;
}
:nth-child(-n + 2) {
  text-align:center;
}`;
const BodyTable = styled.table`
  border-collapse: collapse;
width:715px;
table-layout: fixed;
  `

const Transactiontr = styled.tr`
width:656px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000; 

:first-child{
  margin-top:16px;
  padding-top:0px;
}
:not(:last-child){
 border-bottom:  1px solid black;
}`;

const Transactiontd = styled.td`
height:20px;
text-align:start;
/* border:  1px solid black; */
padding-top:8px;
padding-bottom:8px;
 white-space: normal;
    /* overflow: hidden;
    text-overflow:  ellipsis; */
:nth-child(3){
   white-space: normal; 
}
:nth-last-child(-n + 2){
 text-align: end;
}
:nth-child(-n + 2) {
  text-align:center;
}
`

const SpanSum = styled.span`
    font-weight: 700;
`;

const SpanCom = styled.span`
  /* table-layout: fixed; */
 
`;
const Scroll = styled.div`
   overflow-y: auto;
   height: 254px;
`;
