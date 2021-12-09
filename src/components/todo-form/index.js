import React from "react";
import styles from "./style.module.css";

const TodoForm = () => {
  return (
    <form>
      <div className={styles.form_todo}>
        <h1>Form Todo</h1>
        <div className={styles.form_todo__div}>
          <label htmlFor="name">Nama Todo</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.form_todo__input}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.form_todo__div}>
          <label htmlFor="description">Deskripsi Todo</label>
          <textarea
            id="description"
            name="description"
            className={styles.form_todo__input}
            autoComplete="off"
            required
          ></textarea>
        </div>
        <div className={styles.form_todo__div}>
          <input
            type="submit"
            value="Submit"
            className={styles.form_todo__submit}
          />
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
