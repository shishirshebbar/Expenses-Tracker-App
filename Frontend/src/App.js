import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import {Balance} from './Components/Balance';
import { Expenses } from './Components/Expenses';
import { TransactionsList } from './Components/TransactionsList.js';
import { AddNewTransaction } from './Components/AddNewTransaction';
import {GlobalProvider} from './Context-api/Global.js'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <Expenses/>
        <TransactionsList/>
        <AddNewTransaction/>
      </div>
      </GlobalProvider>

  );
}

export default App;
