// import LoginForm from "../components/LoginForm/LoginForm";

// const Login = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// export default Login;
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
