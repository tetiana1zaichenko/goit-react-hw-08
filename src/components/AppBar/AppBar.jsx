import { useDispatch, useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <Navigation />
      <UserMenu />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
    </div>
  );
};

export default AppBar;
