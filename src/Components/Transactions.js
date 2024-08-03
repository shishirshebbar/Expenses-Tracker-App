import React from 'react';

function Transactions({ transaction }) {
  return (
    <li className='minus'>
      {transaction.text}<span>-₹250</span><button className='delete-button'>X</button>
    </li>
  );
}

export default Transactions;
