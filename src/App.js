import { useState } from "react";
import "./App.css";

import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

function App() {
  const [todo, setTodo] = useState([]);
  const defaultInput = {
    name: "",
    description: "",
    completed: false,
  };
  const [input, setTnput] = useState(defaultInput);

  const handleChange = (e) => {
    let typeOfInput = e.target.name;

    switch (typeOfInput) {
      case "name": {
        setTnput({ ...input, name: e.target.value });
        break;
      }
      case "description": {
        setTnput({ ...input, description: e.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = [...todo, input];
    setTodo(newTodo);
    setTnput(defaultInput);
  };

  const handleCompleteTodo = (index, completed) => {
    const newTodo = [...todo];
    newTodo[index].completed = completed ? false : true;
    setTodo(newTodo);
  };

  const removeTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <TodoForm
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todo={todo}
        handleCompleteTodo={handleCompleteTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
