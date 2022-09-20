import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
import Item from "./Item";
import "../todo.css";

const Todo = ({ list }) => {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={list.item.listName} />
      </ListItem>
      <Item key={list.item.id} item={list.item.listName} />
      <DeleteIcon
        fontSize="large"
        style={{ opacity: 0.7 }}
        onClick={() => {
          deleteDoc(doc(db, "Lists", list.id));
        }}
      />
    </List>
  );
};

export default Todo;
