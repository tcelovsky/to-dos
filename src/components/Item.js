import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

const Item = ({ item }) => {
  return (
    <ListItem>
      <ListItemAvatar />
      <ListItemText secondary={item.listItem} />
    </ListItem>
  );
};

export default Item;
