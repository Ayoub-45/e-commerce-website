import { createContext,useState } from "react"
import PRODUCT_DATA from "../001-shop-data.json"
export const ProductsContext=createContext({
    products:PRODUCT_DATA,
    setProducts:()=>PRODUCT_DATA
})
export const ProductsProvider=function({children}){
   const [products,setProducts]=useState(PRODUCT_DATA);
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