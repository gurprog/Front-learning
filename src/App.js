import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import AppRouter from "./Components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}
export default App;
