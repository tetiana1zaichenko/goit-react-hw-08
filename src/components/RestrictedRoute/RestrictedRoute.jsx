import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

let hasShownToast = false;

const RestrictedRoute = ({ component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (isLoggedIn && !hasShownToast) {
      //   toast.error("You already logged in, but this info is not for you!");
      hasShownToast = true;
      setShouldRedirect(true);
    }
  }, [isLoggedIn]);

  if (isLoggedIn && shouldRedirect) {
    return <Navigate to={redirectTo} />;
  }

  return component;
};

export default RestrictedRoute;
