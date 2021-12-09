import { useState } from "react";
import "./App.css";

import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setTnput] = useState({
    name: "",
    description: "",
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className="App">
      <TodoForm input={input} />
      <TodoList />
    </div>
  );
}

export default App;
