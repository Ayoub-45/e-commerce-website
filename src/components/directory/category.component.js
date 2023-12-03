import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.style.scss";
export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}