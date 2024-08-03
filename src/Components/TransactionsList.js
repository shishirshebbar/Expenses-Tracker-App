import React, { useContext } from 'react';
import { GlobalContext } from '../Context-api/Global';
import Transactions from './Transactions'; // Correct relative path

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Transaction History</h3>
      <ul id='list' className='list'>
        {transactions.map(transaction => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
