import { createContext, useEffect, useState } from "react";
function addCartItem(cartItems,productToAdd){
    const productFound=cartItems.find(product=>product.id===productToAdd.id);
    if(productFound){
        return cartItems.map(product=>(product.id===productToAdd.id)?{...product,quantity:product.quantity+1}:product)
    }
    else
    return [...cartItems,{...productToAdd,quantity:1}]
}
export const cartContext=createContext({
    isOpen:false,
    setIsOpen:()=>{},
    cartItems:[],
    AddItem:()=>{},
    removeItem:()=>{},
    counter:0,
    setCartItems:()=>{},
    total:0,
})
export const CartProvider=function({children}){
   const [isOpen,setIsOpen]=useState(false);
   const [cartItems,setCartItems]=useState([]);
   const [count,setCount]=useState(0);
   const [total,setTotal]=useState(0);
   const addItemToCart=function (productToAdd){
       setCartItems(addCartItem(cartItems,productToAdd));
    }
    useEffect(function(){
        const currentCounter=cartItems.reduce((result,cartItem)=>result+cartItem.quantity,0);
        setCount(currentCounter)
    },[cartItems])
    
    useEffect(function(){
        const cartTotal=cartItems.reduce((acc,curr)=>{
            return acc+curr.quantity*curr.price
        },0)
        setTotal(cartTotal)
    },[cartItems])
   const value={
    isOpen,
    setIsOpen,
    addItemToCart,
    setCartItems,
    cartItems,
    count,
    total,
    setTotal,
   }
    return(
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}