import "./App.css";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function App() {
  const [todos, setTodos] = useState(["Build a React App", "Write a blogpost"]);
  const [input, setInput] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <form>
        <TextField
          id="outlined-basic"
          label="Create Item"
          variant="outlined"
          style={{ margin: "0px 5px" }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></TextField>
        <Button variant="contained" color="primary" onClick={addItem}>
          Add Item
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
