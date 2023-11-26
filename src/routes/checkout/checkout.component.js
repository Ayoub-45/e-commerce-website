import { useContext } from "react"
import "./checkout.style.scss"
import { cartContext } from "../../contexts/cart.context"
import { CartItem } from "../../components/cart-item/cart-item.component"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

export default function Checkout(){
    const {cartItems}=useContext(cartContext)
    return(
        <div className="checkout-container">
        <div className="checkout-header  ">
                <h3 className="header-block">product</h3>
                <h3 className="header-block">description</h3>
                <h3 className="header-block">quantity</h3>
                <h3 className="header-block">price</h3>
                <h3 className="header-block">remove</h3>
             </div>
             {
                cartItems.map(item=>{
                    return <CheckoutItem key={item.id} item={item}/>
                })
              
             }         
        <h1 className="total">TOTAL:${0}</h1>
    </div>) 
}