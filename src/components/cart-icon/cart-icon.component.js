import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { cartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount } from "./cart-icon.style";
export default function CartIcon() {
  const { setIsOpen, count } = useContext(cartContext);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{count}</ItemCount>
    </CartIconContainer>
  );
}
