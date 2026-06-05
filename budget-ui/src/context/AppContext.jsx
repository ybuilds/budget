import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type) {
        case "addExpense":
            return {...state, expense: [...state.expense, action.payload]};
        case "deleteExpense":
            return {...state, expense: state.expense.filter(e => e.id !== action.payload)};
        default:
            return state;
    }
};

const initialState = {
    budget: 1000,
    expense: [],
}

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<AppContext.Provider value={{
        budget: state.budget,
        expense: state.expense,
        dispatch
    }}>
        {props.children}
    </AppContext.Provider>);
};