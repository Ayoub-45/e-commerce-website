import "./navigation.style.scss";
import { useContext} from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { cartContext } from "../../contexts/cart.context";
import DropDown from "../../components/drop-down/drop-down.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
export default function Navigation() {
  const { currentUser} = useContext(UserContext);
  const {isOpen}=useContext(cartContext);
  const isSignIn = currentUser ? true : false;
  async function handleSignout() {
    await signOutUser();
  }
  return (
    <>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <CrwnLogo className="mg" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {isSignIn ? (
            <span className="nav-link" onClick={handleSignout}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        { isOpen &&
          <DropDown/>
        }
      </div>
      <Outlet />
    </>
  );
}
