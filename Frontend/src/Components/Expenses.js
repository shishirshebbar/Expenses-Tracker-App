import React,{useContext} from 'react'
import { GlobalContext } from '../Context-api/Global'
import {numberWithCommas} from '../utilities/numberwithcomma'
export const Expenses = () => {
  const{transactions}= useContext(GlobalContext);
  const amounts = transactions.map(transaction=>transaction.amount);
  const income = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
  const expense = (amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);//*-1: Converts the sum of the negative numbers to its positive equivalent
  return (
    <div className='inc-exp-container'>
      <div>
        <h3>Income</h3>
        <p id = "money-plus" className='money plus'>₹{numberWithCommas(income)}</p>

      </div>
    <div>
      <h3>Expenses</h3>
      <p id = "money-minus" className='money minus'>₹{numberWithCommas(expense)}</p>
    </div>


    </div>
  )
}
