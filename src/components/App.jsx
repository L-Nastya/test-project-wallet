import { React } from "react";
import TransactionHistory from "./transactionsHistory/transactionsHistory";
import transactions from 'data/transactions.json';



export const App = () => {
  return (
    <div>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
