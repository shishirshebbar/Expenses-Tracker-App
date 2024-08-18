import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Context-api/Global';
import {numberWithCommas} from '../utilities/numberwithcomma'
//Header of the webpage

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction=>transaction.amount);
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
  return (
    <>
    <h4>Balance in your account is:</h4>
    <h1 id = "balance">₹{numberWithCommas(total)}</h1>
    </>
  )
}
