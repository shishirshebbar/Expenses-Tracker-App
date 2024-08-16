import React,{useContext} from 'react';
import { GlobalContext } from '../Context-api/Global';

function Transactions({ transaction }) {
  const {deletetransaction}=useContext(GlobalContext);
  const sign = transaction.amount<0?'-':'+';
  return (
    <li className={transaction.amount<0?'minus':'plus'}>
      {transaction.text}<span>{sign}₹{Math.abs(transaction.amount)}</span><button
      onClick={()=>deletetransaction(transaction.id)}
       className='delete-button'>X</button>
    </li>
  );
}

export default Transactions;
