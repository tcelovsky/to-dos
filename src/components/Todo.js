import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

const Todo = ({ todo }) => {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={todo} secondary={todo} />
      </ListItem>
    </List>
  );
};

export default Todo;
