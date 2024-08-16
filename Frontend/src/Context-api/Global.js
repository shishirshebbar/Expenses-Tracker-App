import { useReducer } from "react"
import React,{createContext} from 'react'
import AppReducer from './AppReducer';


const initial = {
    transactions : 
    [
        
    ]
}

//Context creation
export const GlobalContext= createContext(initial);

//Add  Global provider
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initial);
    function deletetransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }//actions
    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }
    return(<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deletetransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}