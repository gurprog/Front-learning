import { useMemo, useState, useRef, useEffect } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";
import PostItem from "./Components/PostItem";
import TextInput from "./Components/TextInput";
import PostList from "./Components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import { usePagination } from "./hooks/usePagination";
import Pagination from "./UI/pagination/pagination";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <About />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
