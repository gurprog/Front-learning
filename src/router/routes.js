import About from "../pages/About";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
  { path: "/home", component: Home, exact: true },
  { path: "/", component: Home, exact: true },
  { path: "/error", component: Error, exact: true },
  { path: "/*", component: Error, exact: true },
];

export const publicRoutes = [{ path: "/*", component: Login, exact: true }];
