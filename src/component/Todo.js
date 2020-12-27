import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  Card,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CloseIcon from "@material-ui/icons/Close";
import "../assets/css/Todo.css";
import db from "../assets/js/firebase";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={(event) => setOpen(false)}>
        <DialogTitle>
          <h2 className="position-relative">
            Edit
            <span className="position-absolute close">
              <CloseIcon onClick={(event) => setOpen(false)}></CloseIcon>
            </span>
          </h2>
        </DialogTitle>
        <DialogContent>
          <textarea
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={updateTodo} variant="contained" color="primary">
            Update todo
          </Button>
        </DialogActions>
      </Dialog>

      <List className="todo__list">
        <Card>
          <ListItem>
            <ListItemText
              primary={props.todo.todo}
              secondary="Dummy deadline ⏰"
            ></ListItemText>
            <Button
              className="mr-3"
              variant="contained"
              color="primary"
              onClick={(event) => setOpen(true)}
            >
              Edit
            </Button>
            <Button variant="contained">
              <DeleteForeverIcon
                onClick={(e) =>
                  db.collection("todos").doc(props.todo.id).delete()
                }
              ></DeleteForeverIcon>
            </Button>
          </ListItem>
        </Card>
      </List>
    </>
  );
}

export default Todo;
