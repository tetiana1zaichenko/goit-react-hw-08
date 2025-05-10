import { useSelector } from "react-redux";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import Navigation from "../components/Navigation/Navigation";
import { Navigate } from "react-router-dom";

const Registration = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
