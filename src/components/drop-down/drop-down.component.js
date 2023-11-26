import { useContext } from "react";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { cartContext } from "../../contexts/cart.context";
import "./drop-down.style.scss";
import { Link, useNavigate } from "react-router-dom";
export default function DropDown(){
    const {cartItems}=useContext(cartContext)
    const navigate=useNavigate();
    function handleNavigate(){
        navigate("/checkout");
    }
    return (
        <div className="cart-dropdown-container ">
    <div className="cart-items">
        {
            cartItems.map(cartItem=>{
                return <CartItem key={cartItem.id} cartItem={cartItem}/>
            })
        }
    </div>  
    <Button onClick={handleNavigate} > Go to checkout  </Button> 
        </div>
    )
}