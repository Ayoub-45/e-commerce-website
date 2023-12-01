import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Fragment } from "react/cjs/react.production.min";
import CategoryPreview from "../../components/category-preview/category-preview.component";
export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </Fragment>
  );
}
