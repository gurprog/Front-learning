import React, { useState } from "react";

const TextInput = function () {
  const [text, setText] = useState("Hello there");

  return (
    <div>
      <h1>{text}</h1>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
};

export default TextInput;
