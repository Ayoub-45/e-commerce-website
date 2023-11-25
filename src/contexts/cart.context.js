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
    counter:0
})
export const CartProvider=function({children}){
   const [isOpen,setIsOpen]=useState(false);
   const [cartItems,setCartItems]=useState([]);
   const [count,setCount]=useState(0);
   const addItemToCart=function (productToAdd){
       setCartItems(addCartItem(cartItems,productToAdd));}
 
   useEffect(function(){
    const currentCounter=cartItems.reduce((result,cartItem)=>result+cartItem.quantity,0);
    setCount(currentCounter)
   },[cartItems])
   const value={
    isOpen,
    setIsOpen,
    addItemToCart,
    cartItems,
    count,
   }
    return(
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}