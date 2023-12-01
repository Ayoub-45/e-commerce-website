import ProductCard from "../products/products-card.component";
import "./category-preview.style.scss";
export default function CategoryPreviw({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
