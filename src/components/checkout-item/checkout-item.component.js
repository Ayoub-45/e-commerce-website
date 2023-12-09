import { useContext } from "react";
import { ReactComponent as LeftArrow } from "../../assets/chevron-left-svgrepo-com.svg";
import { ReactComponent as RightArrow } from "../../assets/chevron-right-svgrepo-com.svg";
import { ReactComponent as Remove } from "../../assets/multiply-svgrepo-com.svg";
import { cartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.style";
export default function CheckoutItem({ item }) {
  const { addItemToCart, cartItems, setCartItems } = useContext(cartContext);
  const { name, price, imageUrl, quantity } = item;

  function handleClearItemFromCart(itemToRemove) {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  }
  function removeItem(itemToRemove) {
    if (itemToRemove.quantity === 1) {
      setCartItems(cartItems.filter((item) => itemToRemove.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === itemToRemove.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={() => removeItem(item)}>
          <LeftArrow />
        </Arrow>
        <Value> {quantity} </Value>
        <Arrow onClick={() => addItemToCart(item)}>
          <RightArrow />
        </Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={() => handleClearItemFromCart(item)}>
        <Remove />
      </RemoveButton>
    </CheckoutItemContainer>
  );
}
