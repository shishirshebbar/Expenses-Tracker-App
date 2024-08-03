import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import {Balance} from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { Transactions } from './Components/TransactionsList.js';
import { AddNewTransaction } from './Components/AddNewTransaction';
import {GlobalProvider} from './Context-api/Global.js'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <Expenses/>
        <Transactions/>
        <AddNewTransaction/>
      </div>
      </GlobalProvider>

  );
}

export default App;
