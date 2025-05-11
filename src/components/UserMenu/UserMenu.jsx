// использовать ф-цию лог аут из аут оператион
import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div>{user && <p>Welcome, {user.name}</p>}</div>;
};

export default UserMenu;
