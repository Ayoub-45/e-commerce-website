import { useNavigate } from "react-router";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";

export default function DirectoryItem({ category }) {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  const { imageUrl, title, route } = category;
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
