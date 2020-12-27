import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import Todo from "./component/Todo";
import db from "./assets/js/firebase";
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //When the app loads, we need to listen the database and fetch new todos as they get added/removed.

  useEffect(() => {
    // this code here... fires when the app loads...
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);
  const addTodo = (event) => {
    //while clicking a button
    event.preventDefault(); // will stop the refresh
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput(""); //Clear up the input after clicking add todo button...........
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 offset-sm-3 mt-5">
            <h1 className="mb-5">TODO app powered by FIREBASE</h1>

            <form className="mt-5">
              <TextField
                className="mb-5"
                id="standard-basic"
                label="✅ Write a Todo"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <Button
                className="mb-5"
                disabled={!input}
                type="submit"
                onClick={addTodo}
                variant="contained"
                color="primary"
              >
                Add todo
              </Button>

              {todos.map((todo) => (
                <Todo todo={todo} />
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
