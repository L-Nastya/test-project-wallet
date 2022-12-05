import PropTypes from 'prop-types';
import styled from 'styled-components';


const CardTransactios = ({ items }) => {
    let sortedCars1 = items.sort((a, b) =>
  b.date.split('.').reverse().join().localeCompare(a.date.split('.').reverse().join()));
  console.log(sortedCars1);
 
    return (
        <TransContainer>
            {items.map(({date, type, category, comment, sum, balance, id}) => (
              <TransList key={id}>
                            <ListItems><TextItems>Date</TextItems><Items>{date}</Items></ListItems>
                            <ListItems><TextItems>Type</TextItems><Items>{type}</Items></ListItems>
                            <ListItems><TextItems>Category</TextItems><Items>{category}</Items></ListItems>
                    <ListItems><TextItems>Comment</TextItems><Items><ComentBlock>{comment || "---"}</ComentBlock></Items></ListItems>
                            <ListItems><TextItems>Sum</TextItems>
                            {type === "+" ? 
                            <Sum style={{color: "#24CCA7"}}>{sum}</Sum> :
                            <Sum style={{color:"#FF6596"} }>{sum}</Sum>}</ListItems>
                            <ListItems><TextItems>Balance</TextItems><Items>{balance}</Items></ListItems>
                            </TransList>
                ))}
                 
        </TransContainer>
    )
}
CardTransactios.propTypes = {
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
export default CardTransactios;

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
const TransList = styled.ul`
  box-sizing: border-box;
    width:280px;
    height:282px;
    list-style: none;
     padding: 0px;
     border-radius:5px ;
      margin: 0px 20px 8px 20px;
       background-color: white;
       border-left: 5px solid ;
       border-color: ${({ type }) => borderColor(type) }; 
`;
const TransContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
   margin-top: 32px;
    background-color: #DCDCDF;
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
/* width: 2px; */
max-width:110px;
`;

const Sum = styled.span`
font-family: 'Circe';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-align: right; 
`;


const ListItems = styled.li`
   display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px 8px 20px;
  white-space: nowrap;
    overflow: hidden;
    text-overflow:  ellipsis;
    :not(:last-child) {
         border-bottom: 1px solid #DCDCDF;
    }
    :not(:first-child) {
          padding-top:12px;
         padding-bottom:8px;
    }
`;

const ComentBlock = styled.span`
   
`