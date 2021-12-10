import React from "react";

const TodoItem = ({ item, index, styles, handleCompleteTodo, removeTodo }) => {
  return (
    <div key={index} className={styles.list_todo_item}>
      <div className={styles.list_todo_item_text}>
        <p
          style={{ textDecoration: item.completed ? "line-through" : "" }}
          className={styles.list_todo_item_text__title}
        >
          {item.name}
        </p>
        <p className={styles.list_todo_item_text__description}>
          {item.description}
        </p>
      </div>
      <div className={styles.list_todo_item_btn_group}>
        <button
          onClick={() => removeTodo(index)}
          className={styles.list_todo_item_btn_group__btn}
          style={{ backgroundColor: "transparent", color: "black" }}
        >
          X
        </button>
        <button
          onClick={() => handleCompleteTodo(index, item.completed)}
          className={styles.list_todo_item_btn_group__btn}
          style={{ backgroundColor: item.completed ? "red" : "green" }}
        >
          {item.completed ? "Batal" : "Selesai"}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
