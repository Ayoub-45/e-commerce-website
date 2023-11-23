import { createContext, useState } from "react";

export const cartContext=createContext({
    isOpen:false,
    setIsOpen:()=>{}
})
export const CartProvider=function({children}){
   const [isOpen,setIsOpen]=useState(false);
   const value={
    isOpen,
    setIsOpen
   }
    return(
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}