import { createContext,useState,useEffect } from "react"
import SHOP_DATA from "../shop-data"
import { addCollectionAndDocuments } from "../utils/firebase.utils"

export const ProductsContext=createContext({
    products:SHOP_DATA,
    setProducts:()=>SHOP_DATA
})
export const ProductsProvider=function({children}){
   const [products,setProducts]=useState([]);
   const value={
    products,
    setProducts
   }
 
   return (
   <ProductsContext.Provider value={value}>
    {children}
   </ProductsContext.Provider>
   )
   
}   