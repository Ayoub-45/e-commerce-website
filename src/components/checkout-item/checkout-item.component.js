 import { useContext } from "react";
import {ReactComponent as LeftArrow} from "../../assets/chevron-left-svgrepo-com.svg"
 import {ReactComponent as RightArrow} from "../../assets/chevron-right-svgrepo-com.svg"
 import {ReactComponent as Remove } from "../../assets/multiply-svgrepo-com.svg";
 import "./checkout-item.style.scss"
import { cartContext } from "../../contexts/cart.context";
export default function CheckoutItem({item}){
const {addItemToCart,decrementQuanity}=useContext(cartContext)
const {name,price,imageUrl,quantity}=item;
return(
<div className="checkout-item-container">
    <div className="image-container">
        <img src={imageUrl}  alt={name}/>
    </div>
    <span className="name">{name}</span>
    <div className="quantity">
         <span className="arrow" onClick={()=>decrementQuanity(item)}><LeftArrow/></span> 
         <span className="value"> {quantity} </span>
         <span className="arrow" onClick={()=>addItemToCart(item)}><RightArrow/></span>
    </div>
    <span className="price">{price}</span>
    <span  className= "remove"> <Remove/></span>
</div>
)
}