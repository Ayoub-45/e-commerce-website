import { useContext } from "react";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { cartContext } from "../../contexts/cart.context";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./drop-down.style.jsx";

import { useNavigate } from "react-router-dom";
export default function DropDown() {
  const { cartItems } = useContext(cartContext);
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/checkout");
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleNavigate}>checkout </Button>
    </CartDropdownContainer>
  );
}
