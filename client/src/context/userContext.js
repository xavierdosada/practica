import { createContext, useReducer } from "react";

const userContext = createContext();
const initialState = {
    user: {}
} 
const reducer = (state, action) => {
    switch(action.type){
     case "ADD_USER":
        return {user: action.payload}
     default:
        return state;   
    }
}

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addUser = (user) => {
        dispatch({type: "ADD_USER", payload: user});
    }
    return <userContext.Provider value={{user: state.user, addUser}}>{children}</userContext.Provider>
}

export {ContextProvider, userContext};