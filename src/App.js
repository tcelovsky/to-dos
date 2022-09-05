import "./App.css";
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Build a React App", "Write a blogpost"]);
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h2>To Dos</h2>
    </div>
  );
}

export default App;
