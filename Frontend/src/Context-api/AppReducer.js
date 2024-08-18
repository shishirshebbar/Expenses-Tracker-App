const AppReducer = (state, action) => {
    switch (action.type) {
        case "GET_TRANSACTIONS":
            return{
                ...state,// keeps the previous state unchanged except for the properties by  explicitly modify
                loading:false,//indicatesthat a loading process has completed.
                transactions:action.payload//action.payload updates the transactions property with data provided in action.payload
            }
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction._id!=action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
            ...state,//...=>spread operator
            transactions:[...state.transactions,action.payload]
            }
        case "TRANSACTION_ERROR":
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
};

export default AppReducer;
