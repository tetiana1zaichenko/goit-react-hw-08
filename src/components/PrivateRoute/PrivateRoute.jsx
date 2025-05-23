import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      toast.error("This is a private page for logged users");
      setShouldRedirect(true);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn && shouldRedirect) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
