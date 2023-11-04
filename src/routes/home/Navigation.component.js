import { Link, Outlet } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <div className="navigation-container">
        <div>
          <Link className="logo-container" to="/">
            LOGO
          </Link>
        </div>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
