import { Link, Outlet } from "react-router-dom";
import "./navbar.style.scss";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-logo">Logo</div>
          <div className="navbar-links">
            <Link to={"/home"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/sign"}>Sign Up</Link>
          </div>
          <div className="navbar-icon">Icon</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
