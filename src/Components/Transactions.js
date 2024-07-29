import React from 'react'

export const Transactions = () => {
  return (
    <>
        <h3>Transaction History</h3>
        <ul id='list' className='list'>
            <li className='minus'>
                Cash<span>-₹250</span><button className='delete-button'>X</button>
            </li>

        </ul>


    </>
  )
}
