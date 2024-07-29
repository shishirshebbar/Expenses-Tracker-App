import { useReducer } from "react"
import React,{createContext} from 'react'

const initial = {
    transactions : 
    [
        {id:1,text:"Debit Card", amount:+200},
        {id:2,text:"Cash", amount:-100},
        {id:3,text:"UPI", amount:+-300},
        {id:4,text:"Cash", amount:-700},
        {id:5,text:"UPI", amount:+1300},
        {id:6,text:"Credit Card", amount:-500}
    ]
}