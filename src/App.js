import "./styles.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoActions, RemoveTodoAction } from "./actions/TodoActions";
export default function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const Todo = useSelector((state) => {
    // console.log(state.Todo);
    return state.Todo;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoActions(todo));
    setTodo("");
  };
  return (
    <div className="App">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={{
            padding: 10,
            width: 350,
            borderRadius: 20,
            fontSize: 20
          }}
        />
        <button
          type="submit"
          style={{
            padding: 10,
            borderRadius: 20,
            fontSize: 20,
            marginLeft: 5,
            cursor: "pointer"
          }}
        >
          Go
        </button>
      </form>
      {/* list */}
      <ul className="allTodos">
        {Todo &&
          Todo.todos &&
          Todo.todos.map((td, i) => (
            <li className="singleTodo" key={i + "" + td.id}>
              <span className="todoText">{td.todo}</span>
              <button
                style={{
                  borderRadius: 20,
                  padding: 10,
                  color: "#fff",
                  background: "red",
                  cursor: "pointer"
                }}
                onClick={() => dispatch(RemoveTodoAction(td))}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
