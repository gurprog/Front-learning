import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { privateRoutes, publicRoutes } from "../router/routes";
import { AuthContext } from "../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            Component={route.component}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            Component={route.component}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
    </Routes>
  );
};
export default AppRouter;
