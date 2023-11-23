import Button from "../button/button.component";
import "./drop-down.style.scss";
export default function DropDown(){
    return (
        <div className="cart-dropdown-container ">
    <div className="cart-items"></div>
        <Button>Go to check out </Button>
        </div>
    )
}