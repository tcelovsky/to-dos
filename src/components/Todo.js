import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import Item from "./Item";
import "../todo.css";

const Todo = ({ arr }) => {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={arr.item.listName} />
        <Item key={arr.item.id} item={arr.item.listName} />
      </ListItem>
      <DeleteIcon
        fontSize="large"
        style={{ opacity: 0.7 }}
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </List>
  );
};

export default Todo;
