import React from "react";
import styles from "./style.module.css";

import TodoItem from "./todo-item";

const TodoList = ({ todo, handleCompleteTodo, removeTodo }) => {
  return (
    <div className={styles.list_todo}>
      <h1>List Todo</h1>
      {todo.length > 0 ? (
        todo.map((item, index) => (
          <TodoItem
            item={item}
            index={index}
            styles={styles}
            handleCompleteTodo={handleCompleteTodo}
            removeTodo={removeTodo}
          />
        ))
      ) : (
        <p>Belum Ada Todo</p>
      )}
    </div>
  );
};

export default TodoList;
