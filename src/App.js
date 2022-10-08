import "./App.css";
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Todo from "./components/Todo";
import Header from "./components/Header";
import { db } from "./firebase.js";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";

const q = query(collection(db, "Lists"), orderBy("timestamp", "desc"));

function App() {
  const [lists, setLists] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setLists(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          list: doc.data(),
        }))
      );
    });
  }, [input]);

  const addList = (e) => {
    e.preventDefault();
    addDoc(collection(db, "Lists"), {
      listName: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <Header />
      <form>
        <TextField
          id="outlined-basic"
          label="Add New List"
          variant="outlined"
          style={{ margin: "0px 5px" }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></TextField>
        <Button variant="contained" color="primary" onClick={addList}>
          Add New List
        </Button>
      </form>
      <ul>
        {lists.map((list) => (
          <Todo key={list.id} list={list} />
        ))}
      </ul>
    </div>
  );
}

export default App;
