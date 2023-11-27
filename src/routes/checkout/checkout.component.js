import { useContext } from "react"
import "./checkout.style.scss"
import { cartContext } from "../../contexts/cart.context"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

export default function Checkout(){
    const {cartItems}=useContext(cartContext)
    return(
        <div className="checkout-container">
        <div className="checkout-header  ">
            <div className="header-block">
                <span >product</span>
            </div>
            <div className="header-block">
                <span>description</span>
                </div>
                <div className="header-block">
                <span >quantity</span>
                </div>
                <div className="header-block">
                <span >price</span>
                </div>
                <div className="header-block">
                <span >remove</span>
                </div>
             </div>
             {
                cartItems.map(item=>{
                    return <CheckoutItem key={item.id} item={item}/>
                })
              
             }         
        <h1 className="total">TOTAL:${0}</h1>
    </div>) 
}