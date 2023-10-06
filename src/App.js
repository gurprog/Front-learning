import { useState, useRef } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";
import PostItem from "./Components/PostItem";
import TextInput from "./Components/TextInput";
import PostList from "./Components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import PostForm from "./Components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    console.log(post.id);
    console.log(posts.filter((p) => p.id != post.id));
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не были найдены!</h1>
      )}
    </div>
  );
}
export default App;
