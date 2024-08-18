import React,{useContext} from 'react';
import { GlobalContext } from '../Context-api/Global';
import {numberWithCommas} from '../utilities/numberwithcomma'
function Transactions({ transaction }) {
  const {deletetransaction}=useContext(GlobalContext);
  const sign = transaction.amount<0?'-':'+';
  return (
    <li className={transaction.amount<0?'minus':'plus'}>
      {transaction.text}<span>{sign}₹{numberWithCommas(Math.abs(transaction.amount))}</span><button
      onClick={()=>deletetransaction(transaction._id)}
       className='delete-button'>X</button>
    </li>
  );
}

export default Transactions;
