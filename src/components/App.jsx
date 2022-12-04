import { React, Fragment } from "react";
import Media from 'react-media';
import CardTransactios from "./CardTransactios/CardTransactios";
import TableTransactions from "./TableTransactions/TableTransactions";
import transactions from 'data/transactions.json';
import {columns} from './colums'
import styled from "styled-components";
import Table from "./trylibrary";
import OneMore from "./onemore";



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
              {matches.medium && <TableTransactions items={transactions} colums={columns} />}
              {matches.large && <OneMore items={transactions} colums={columns} />}
            </Fragment>
          )}
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