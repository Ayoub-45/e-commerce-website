import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss"
export default function CartIcon({onClick}){
    return(
        <div className="cart-icon-container" onClick={onClick}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
   )
}