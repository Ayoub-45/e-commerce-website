import Button from "../button/button.component";
import { useContext} from "react";
import { cartContext } from "../../contexts/cart.context";
export default function ProductCard({product}){
const {name,imageUrl,price}=product;
const {addItemToCart}= useContext(cartContext)
function addProductToItem(){
    addItemToCart(product)
}
return (
    <div className="products-container">
        <img src={imageUrl} alt={name}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToItem}>Add to card</Button>
    </div>
)
}