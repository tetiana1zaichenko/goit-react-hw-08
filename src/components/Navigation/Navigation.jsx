import { NavLink } from "react-router-dom";
import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && "text-red-500");
};

const Navigation = () => {
  // const user = useSelector(selectUser);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/contacts">
          Contacts
        </NavLink>
        {/* <NavLink className={setActiveClass} to="/login">
          Login
        </NavLink>
        <NavLink className={setActiveClass} to="/registration">
          Registration
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Navigation;
