import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import {Balance} from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { Transactions } from './Components/Transactions';
import { AddNewTransaction } from './Components/AddNewTransaction';

function App() {
  return (
    <div>
      <Header/>
      <div className='container'>
        <Balance/>
        <Expenses/>
        <Transactions/>
        <AddNewTransaction/>
      </div>
    </div>

  );
}

export default App;
