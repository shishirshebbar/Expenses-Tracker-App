import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context-api/Global';

export const AddNewTransaction = () => {
    const [text, setTask] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000000),
            text,
            amount: +amount, // Convert amount to a number
        };

        addTransaction(newTransaction);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} id="form">
                <div className='form-control'>
                    <label htmlFor="text">Text</label>
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setTask(e.target.value)}
                        id="text"
                        placeholder='Enter text'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">Amount (-ve=expense, +ve=income)</label>
                    <input
                        type='number'
                        //value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        id="amount"
                        placeholder='Enter the amount'
                    />
                </div>
                <button className='btn'>Add new transaction</button>
            </form>
        </>
    );
};
