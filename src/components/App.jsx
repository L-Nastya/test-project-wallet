import { React, Fragment } from "react";
import Media from 'react-media';
import CardTransactios from "./CardTransactios/CardTransactios";
import TableTransactions from "./TableTransactions/TableTransactions";
import transactions from 'data/transactions.json';
import {COLUMNS} from './colums'
import styled from "styled-components";



export const App = () => {
  return (
    <DivCon>
       <Media queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
      }}>
        {matches => (
            <Fragment>
              {matches.small && <CardTransactios items={transactions} />}
              {matches.medium && <TableTransactions items={transactions} colums={COLUMNS} />}
              {matches.large && <TableTransactions items={transactions} colums={COLUMNS} />}
            </Fragment>
          )}
      {/* <CardTransactios items={transactions} /> */}
        {/* <TableTransactions items={transactions} /> */}
        </Media>
    </DivCon>
  );
};

const DivCon = styled.div`
  background-color: #E7EAF2;
  /* width:704px; 
  height:312px; 
  overflow-y: scroll; */
`