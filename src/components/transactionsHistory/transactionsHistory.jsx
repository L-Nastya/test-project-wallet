import PropTypes from 'prop-types';
import styled from 'styled-components';

const TransactionHistory = ({ items }) => {
    // let sortedCars1 = items.sort((a, b) => new Date(...a.date.split('/')) - new Date(...b.date.split('/')));
    // console.log(sortedCars1)
//     let sortedCars = items.sort((a, b) => Date.parse(new Date(a.date.split("/").reverse().join("-"))) - Date.parse(new Date(b.date.split("/").reverse().join("-"))));
//    console.log(sortedCars)
//     let sortedCars = items.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
//    console.log(sortedCars)
    let sortedCars1 = items.sort((a, b) =>
  b.date.split('/').reverse().join().localeCompare(a.date.split('/').reverse().join()));

console.log(sortedCars1);
    return (
        <TransContainer>
            {items.map(({date, type, category, comment, sum, balance, id}) => (
                        <TransList key={id}>
                            <ListItems><TextItems>Date</TextItems><Items>{date}</Items></ListItems>
                            <ListItems><TextItems>Type</TextItems><Items>{type}</Items></ListItems>
                            <ListItems><TextItems>Category</TextItems><Items>{category}</Items></ListItems>
                    <ListItems><TextItems>Comment</TextItems><Items>{comment || "---"}</Items></ListItems>
                            <ListItems><TextItems>Sum</TextItems><Items>{sum}</Items></ListItems>
                            <ListItems><TextItems>Balance</TextItems><Items>{balance}</Items></ListItems>
                            </TransList>
                ))}
                 
        </TransContainer>
    )
}
TransactionHistory.propTypes = {
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
export default TransactionHistory;

const borderColor = type => {
  switch (type) {
    case '-':
      return '#FF6596';
    case '+':
      return '#24CCA7';
    default:
      return '#fff';
  }
};

const TransContainer = styled.div`
    width:280px;
    /* height:282px; */
   margin: 32px auto;
    
    background-color: #DCDCDF;
`;
const TransList = styled.ul`
    list-style: none;
     padding: 0px;
     border-radius:5px ;
      margin: 0px 20px 8px 20px;
       background-color: white;
       border-left: 5px solid #FF6596;
       /* border-color: ${({ type }) => borderColor(type)}; ;  */
`;
const TextItems = styled.span`
font-family: 'Circe';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #000000;
`

const Items = styled.span`
font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #000000; 
`;

const ListItems = styled.li`
   display:flex;
    justify-content: space-between;
    align-items: center;
       padding: 12px 20px 8px 20px;
    :not(:last-child) {
         border-bottom: 1px solid #DCDCDF;
    }
    :not(:first-child) {
          padding-top:12px;
         padding-bottom:8px;
    }
`;

