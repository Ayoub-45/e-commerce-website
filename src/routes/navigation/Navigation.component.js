import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const isSignIn = currentUser ? true : false;
  async function handleSignout() {
    await signOutUser();
    setCurrentUser(null);
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
        </div>
      </div>
      <Outlet />
    </>
  );
}
