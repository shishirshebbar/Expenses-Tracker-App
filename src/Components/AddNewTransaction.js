import React,{useState} from 'react'

export const AddNewTransaction = () => {
    const[text,setTask]=useState("");
    const[amount,setAmount] = useState(0);
    return (
    <>
    <h3>Add new transaction</h3>
    <form id = "form">
        <div className='form-control'>
        <label htmlFor = "text">Text</label>
        <input type='text' value={text} onChange={(e)=>setTask(e.target.value)} id = "text" placeholder='Enter text'/>
        </div>
        <div className='form-control'>
            <label htmlFor = "amount">Amount is: <br/>(negative-expense,positive,-income)</label>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} id = "amount" placeholder='Enter the amount'/>
            </div>
            <button className='btn'>Add new transaction</button>
    </form>
    </>
  )
}
