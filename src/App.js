import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link to={"/posts"}>Посты</Link>
          </li>
          <li>
            <Link to={"/about"}>О создателях</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
