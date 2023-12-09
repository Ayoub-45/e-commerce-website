import { Link } from "react-router-dom";
import ProductCard from "../products/products-card.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.style";
export default function CategoryPreviw({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
}
