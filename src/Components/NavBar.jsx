import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/index";
import MyButton from "../UI/button/MyButton";

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};
export default NavBar;
