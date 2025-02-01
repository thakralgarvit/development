import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  let [todos, setTodos] = useState([
    { task: "sample Task", id: uuidv4(), isDone: false },
  ]); // this one used to store the tak and update the task
  let [newTodo, setNewTodo] = useState(""); // this one store the input value so the value can be send to todos

  let addNewTodo = () => {
    // adding value to main todos
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    //taking out the todo
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let updateUpperCase = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // used .map as it is recomended in react docs
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let doneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let doneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a Task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTodo}>Add</button>
      <br />
      <hr />
      <h4>Todos</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
              {todo.task}
            </span>{" "}
            &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>upperCase</button>
            <button onClick={() => doneOne(todo.id)}>Completed</button>
          </li> //this way deleteTodo fun() will not be exicuted as soon as the website start
        ))}
      </ul>
      <br />
      <button onClick={updateUpperCase}>Update all to upper case</button>
      <button onClick={doneAll}>all task are completed</button>
    </div>
  );
}
