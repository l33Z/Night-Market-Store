import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar__main">
      <div className="Sidebar__links">
        <NavLink className="Page__link" to="/">
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </NavLink>

        <NavLink className="Page__link" to="/store">
          <i className="fa-solid fa-store"></i>
          <p>Store</p>
        </NavLink>

        <NavLink className="Page__link" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
