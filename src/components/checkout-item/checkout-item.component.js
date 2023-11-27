 import { useContext } from "react";
import {ReactComponent as LeftArrow} from "../../assets/chevron-left-svgrepo-com.svg"
 import {ReactComponent as RightArrow} from "../../assets/chevron-right-svgrepo-com.svg"
 import {ReactComponent as Remove } from "../../assets/multiply-svgrepo-com.svg";
 import "./checkout-item.style.scss"
import { cartContext } from "../../contexts/cart.context";
export default function CheckoutItem({item}){
const {addItemToCart,cartItems,setCartItems}=useContext(cartContext)
const {name,price,imageUrl,quantity}=item;
function handleClearItemFromCart(itemToRemove){
    setCartItems(cartItems.filter(item=>item.id!==itemToRemove.id))
}
function removeItem(itemToRemove){
    if(itemToRemove.quantity===1){

        return setCartItems(cartItems.filter(item=>itemToRemove.id!==item.id));
    }
    else{
        return setCartItems(cartItems.map(product=>(product.id===itemToRemove.id)?{...product,quantity:product.quantity-1}:product));
    }
    }
   
return(
<div className="checkout-item-container">
    <div className="image-container">
        <img src={imageUrl}  alt={name}/>
    </div>
    <span className="name">{name}</span>
    <div className="quantity">
         <span className="arrow" onClick={()=>removeItem(item)}><LeftArrow/></span> 
         <span className="value"> {quantity} </span>
         <span className="arrow" onClick={()=>addItemToCart(item)}><RightArrow/></span>
    </div>
    <span className="price">{price}</span>
    <span  className= "remove-button" onClick={()=>handleClearItemFromCart(item)}> <Remove/></span>
</div>
)
}