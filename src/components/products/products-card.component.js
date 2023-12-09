import Button from "../button/button.component";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart.context";
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./products-card.style";

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(cartContext);
  function addProductToItem() {
    addItemToCart(product);
  }
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer className="footer">
        <Name>{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToItem}>
        Add to card
      </Button>
    </ProductCartContainer>
  );
}
