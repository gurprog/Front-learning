import React from "react";
import "../Styles/App.css";
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton
          onClick={() => {
            console.log(props.post);
            props.remove(props.post);
          }}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
