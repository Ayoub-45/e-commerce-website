import { useContext } from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import { cartContext } from "../../contexts/cart.context";
import "./cart-icon.style.scss"
export default function CartIcon(){
    const {setIsOpen,count}=useContext(cartContext);
    function toggle(){
        setIsOpen((isOpen)=>!isOpen);
    }
    return(
        <div className="cart-icon-container" onClick={toggle} >
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{count}</span>
        </div>
   )
}