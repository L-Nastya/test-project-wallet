import PropTypes from 'prop-types';
import styled from 'styled-components';


const TableTransactions = ({ items , colums}) => {
    let sortedCars1 = items.sort((a, b) =>
  b.date.split('.').reverse().join().localeCompare(a.date.split('.').reverse().join()));
  console.log(sortedCars1);
 
  return (
    <GeneralCon>
        <TableHead>
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
      </TableHead>
      <BodyCon><TableMore>
        <ScrollBody>
                 {
                items.map(item => (
                        <Transactiontr key={item.id}>
                            <Transactiontd>{item.date}</Transactiontd>
                            <Transactiontd>{item.type}</Transactiontd>
                           <Transactiontd>{item.category}</Transactiontd>
                            <Transactiontd><SpanCom>{item.comment || "---"}</SpanCom></Transactiontd>
                           <Transactiontd>{item.type === "+" ? 
                            <SpanSum style={{color: "#24CCA7"}}>{item.sum}</SpanSum> :
                            <SpanSum style={{color:"#FF6596"} }>{item.sum}</SpanSum>}</Transactiontd>
                           <Transactiontd>{item.balance}</Transactiontd>
                            </Transactiontr>
                ))
                }
                </ScrollBody>
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
const TableHead = styled.table`
display:grid;
`;
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
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #000000;
`;


const BodyCon = styled.div`
  height:254px; 
  /* width: 656px; */
  overflow-y: scroll;
`
const TableMore = styled.table`
/* width: 656px; */
display:grid;
border-collapse: collapse;
table-layout: auto;

`;
const ScrollBody = styled.tbody`
  display: table-caption;
  box-sizing:border-box;
`;

const Transactiontr = styled.tr`
position: relative;
   display:flex;
   justify-content:space-between;
   align-items:center;
width:656px;
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #000000; 
padding-top:8px;
padding-bottom:8px;
:first-child{
  margin-top:16px;
  padding-top:0px;
}
:not(:last-child){
 border-bottom:  1px solid #DCDCDF;
}`;
   
const Transactiontd = styled.td`
width:14%;
text-align:start;
   white-space: normal;
    overflow: hidden;
    text-overflow:  ellipsis;
:nth-last-child(-n + 2){
 text-align: end;
}
:nth-child(-n + 2) {
  text-align:center;
}
:hover {
  z-index: 1;
  overflow: visible;
}
`;
const SpanSum = styled.span`
    font-weight: 700;
`;

const SpanCom = styled.span`
  width:20%;
  white-space:nowrap;
`;
