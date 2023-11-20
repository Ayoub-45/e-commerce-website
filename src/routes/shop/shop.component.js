import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"
import ProductCard from "../../components/products/products-card.component";
import "./shop.style.scss";
export default function Shop(){
 const {products}=useContext(ProductsContext);
    return(
       <div className="container">
        {
            products.map(product=>{

               return <ProductCard key={product.id} product={product}/>
            })
        }
       </div>
    )
}