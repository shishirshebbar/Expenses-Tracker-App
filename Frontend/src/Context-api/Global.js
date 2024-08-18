import { useReducer } from "react"
import React,{createContext} from 'react'
import AppReducer from './AppReducer';
import axios from "axios";

const initial = {
    transactions : 
    [
        
    ],
    error:null,
    loading:true
}

//Context creation
export const GlobalContext= createContext(initial);

//Add  Global provider
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initial);
    async function getTransactions() {
        try{
            const response = await axios.get('./transactions');
            dispatch({
                type:"GET_TRANSACTIONS",
                payload:response.data.data
            });

        }
        catch(err){
            const response = await axios.get('./transactions');
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:err.response.data.error
            });
        }
        
    }
    async function deletetransaction(id){
        try{
            await axios.delete(`./transactions/${id}`);
            dispatch({
                type:"DELETE_TRANSACTION",
                payload:id
            });

        }catch(err){

            dispatch({
                type:"TRANSACTION_ERROR",
                payload:err.response.data.error
            });

        }
        
    }//actions
    async function addTransaction(transaction){
        const config ={
            headers:{
                'Content-type':'application/json'
            }
        }
        try{
            const response=await axios.post('./transactions',transaction,config);
            dispatch({
                type:"ADD_TRANSACTION",
                payload:response.data.data
            })
        }
        catch(err){
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:err.response.data.error
            })
        }
        
    }
    return(<GlobalContext.Provider value ={{
        transactions: state.transactions,
        error:state.error,
        loading:state.loading,
        getTransactions,
        deletetransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}