import "./category.style.scss";
import { useParams } from "react-router";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/products/products-card.component";
import { Fragment } from "react/cjs/react.production.min";
export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(
    function () {
      setProducts(categoriesMap[category]);
    },
    [category, categoriesMap]
  );
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
}
