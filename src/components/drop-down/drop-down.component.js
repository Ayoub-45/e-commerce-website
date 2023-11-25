import { useContext } from "react";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { cartContext } from "../../contexts/cart.context";
import "./drop-down.style.scss";
export default function DropDown(){
    const {cartItems}=useContext(cartContext)
    return (
        <div className="cart-dropdown-container ">
    <div className="cart-items">
        {
            cartItems.map(cartItem=>{
                return <CartItem key={cartItem.id} cartItem={cartItem}/>
            })
        }
    </div>
        <Button>Go to check out</Button>
        </div>
    )
}