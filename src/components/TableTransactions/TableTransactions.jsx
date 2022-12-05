import PropTypes from 'prop-types';
import styled from 'styled-components';


const TableTransactions = ({ items , colums}) => {
    let sortedCars1 = items.sort((a, b) =>
  b.date.split('.').reverse().join().localeCompare(a.date.split('.').reverse().join()));
  console.log(sortedCars1);
 
  return (
    <GeneralCon>
        <table>
             <TransactionHead >
          <Trantr>
            {
                colums.map(colum => (
                            <Transactionth>
                    {colum.Header}
                            </Transactionth>
                           
                        ))
                }</Trantr>
      </TransactionHead >
      </table>
      <BodyCon><TableMore>
        <tbody>
                 {
                items.map(item => (
                        <Transactiontr key={item.id}>
                            <Transactiontd>{item.date}</Transactiontd>
                            <Transactiontd>{item.type}</Transactiontd>
                           <Transactiontd>{item.category}</Transactiontd>
                            <Transactiontd>{item.comment || "---"}</Transactiontd>
                           <Transactiontd>{item.type === "+" ? 
                            <SpanSum style={{color: "#24CCA7"}}>{item.sum}</SpanSum> :
                            <SpanSum style={{color:"#FF6596"} }>{item.sum}</SpanSum>}</Transactiontd>
                           <Transactiontd>{item.balance}</Transactiontd>
                            </Transactiontr>
                ))
                }
                </tbody>
        </TableMore></BodyCon></GeneralCon>
            
      
        )}
    
TableTransactions.propTypes = {
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
export default TableTransactions;


const GeneralCon = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
  width:704px; 
  height:312px; 
  margin-top: 20px ;
  margin-left:32px;
  margin-right: 32px;
background-color: transparent;
 
  @media (min-width: 1200px) {
    width: 715px;
    margin: 46px 16px  0px 69px;
  }
`
const TransactionHead = styled.thead`
display: table-caption;
box-sizing:border-box;
    height: 58px;
    background-color: #ffff; 
    padding: 16px 20px 15px 20px;
   border-radius: 30px;
`;
const Trantr = styled.tr`
   display:flex;
   justify-content:space-between;
`;
const Transactionth = styled.th`
font-family: 'Circe';
text-align: start;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #000000;
width:14.5%;
:first-child{
  width: 12%;
}
    :nth-child(2){
  width: 16.2%;
    text-align:center;
}
   :nth-child(4){
  width: 17%;
}
   :nth-child(5){
  width: 14.8%;
}
  :nth-child(6){
  width: 14.6%;
}
:nth-last-child(-n + 2){
 text-align: end;
}
`;
const BodyCon = styled.div`
  height:254px; 
  overflow-y: scroll;
`
const TableMore = styled.table`
display:flex;
border-collapse: collapse;
justify-content: center;
`;
const Transactiontr = styled.tr`
   display:flex;
   justify-content:space-between;
   align-items:center;
width:656px;
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: #000000; 
padding-top:10px;
padding-bottom:10px;
:first-child{
  margin-top:16px;
  padding-top:0px;
}
:not(:last-child){
 border-bottom:  1px solid #DCDCDF;
}`;
   
const Transactiontd = styled.td`
width:14.5%;
max-height:36px;
text-align:start;
   /* white-space: normal; */
    /* overflow: hidden;
    text-overflow:  ellipsis; */
display: -webkit-box;
-webkit-line-clamp: 2; 
-webkit-box-orient: vertical;
overflow: hidden;
 :first-child{
  width: 12%;
}
    :nth-child(2){
  width: 16.2%;
    text-align:center;
}
   :nth-child(4){
  width: 17%;
}
   :nth-child(5){
  width: 14.8%;
}
  :nth-child(6){
  width: 14.6%;
}
:nth-last-child(-n + 2){
 text-align: end;
}
:hover {
  z-index: 1;
  overflow: visible;
  position: absolute;
  top:50px;
  left:50px;
right:-50px;
bottom:-50px;
}
`;
const SpanSum = styled.span`
    font-weight: 700;
`;


