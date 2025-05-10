import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import LoginForm from "../components/LoginForm/LoginForm";
import Navigation from "../components/Navigation/Navigation";

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigation to="/" />;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
