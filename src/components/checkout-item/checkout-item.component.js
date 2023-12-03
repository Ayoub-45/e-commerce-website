import { useContext } from "react";
import { ReactComponent as LeftArrow } from "../../assets/chevron-left-svgrepo-com.svg";
import { ReactComponent as RightArrow } from "../../assets/chevron-right-svgrepo-com.svg";
import { ReactComponent as Remove } from "../../assets/multiply-svgrepo-com.svg";
import { cartContext } from "../../contexts/cart.context";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Name,
  Value,
  Price,
  Quantity,
  RemoveButton,
} from "./checkout-item.style";
export default function CheckoutItem({ item }) {
  const { addItemToCart, cartItems, setTotal, setCartItems } =
    useContext(cartContext);
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
        <Img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeItem(item)}>
          <LeftArrow />
        </Arrow>
        <Value> {quantity} </Value>
        <Arrow onClick={() => addItemToCart(item)}>
          <RightArrow />
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={() => handleClearItemFromCart(item)}>
        <Remove />
      </RemoveButton>
    </CheckoutItemContainer>
  );
}
