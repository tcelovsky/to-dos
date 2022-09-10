import "./App.css";
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Todo from "./components/Todo";
import { db } from "./firebase.js";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data()));
    });
  }, [input]);

  const addItem = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    // setTodos([...todos, input]);
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
        {todos.map(({ todo }) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
