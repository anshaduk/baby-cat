import React, { createContext, useReducer, useState } from 'react'
import all_product from '../Assets/all_product'
import Product from '../../Pages/Product';
import reducer from '../NewContext/CartReducer'


export const ProductCartContext=createContext();
const initialState={
    item:all_product,
    cartItem:[],
    totalAmount:0,
    totalItem:0,
};
const CartContext = ({ children }) => {
// const[state,setState]=useState(all_product)
const [state,dispatch]=useReducer(reducer,initialState)

//to add the indv.elements to the cart
const addToCart=(id)=>{
    return dispatch({
        type:'ADD_ITEM',
        payload:id,
    });
};
  return (
    <>
    <ProductCartContext.Provider value={{...state,addToCart}}>
        {children}
    </ProductCartContext.Provider>
    </>
    
  )
}

export default CartContext