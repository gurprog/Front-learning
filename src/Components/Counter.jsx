import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = function () {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <Button variant="primary" onClick={increment}>
        Increment
      </Button>{" "}
      <button onClick={decrement}>Decrement</button>
      <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
    </div>
  );
};

export default Counter;
