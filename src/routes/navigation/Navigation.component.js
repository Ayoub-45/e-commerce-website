import {
  LogoContainer,
  NavigationContainer,
  NavLinksContainer,
  NavigationLink,
} from "./navigation.style";
import { useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import { cartContext } from "../../contexts/cart.context";
import DropDown from "../../components/drop-down/drop-down.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { Fragment } from "react/cjs/react.production.min";
import { Outlet } from "react-router";
export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(cartContext);
  const isSignIn = currentUser ? true : false;
  async function handleSignout() {
    await signOutUser();
  }
  return (
    <Fragment>
      <NavigationContainer>
        <div>
          <LogoContainer to="/">
            <CrwnLogo />
          </LogoContainer>
        </div>
        <NavLinksContainer>
          <NavigationLink to="/shop">SHOP</NavigationLink>
          {isSignIn ? (
            <NavigationLink as="span" onClick={handleSignout}>
              SIGN OUT
            </NavigationLink>
          ) : (
            <NavigationLink to="/auth">SIGN IN</NavigationLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isOpen && <DropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
