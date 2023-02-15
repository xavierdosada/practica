import { createContext, useReducer } from "react"
import { ContextProvider } from "./userContext";
const productsContext = createContext();
const initialState = {
    selectedProduct: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return {selectedProduct: action.payload}
        default:
            return state;
    }
}

const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const addProduct = (selectedProduct) => {
        dispatch({type: "ADD_PRODUCT", payload: selectedProduct})
    }
    return <productsContext.Provider value={{selectedProduct: state.selectedProduct, addProduct}}>{children}</productsContext.Provider>
}

export {ProductsProvider, productsContext};
