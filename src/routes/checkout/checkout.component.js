import { useContext } from "react";

import { cartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./checkout.style";

export default function Checkout() {
  const { cartItems, total } = useContext(cartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>quantity</span>
        </HeaderBlock>

        <HeaderBlock>
          <span>price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <h1>TOTAL:${total}</h1>
    </CheckoutContainer>
  );
}
