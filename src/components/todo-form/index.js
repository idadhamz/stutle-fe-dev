import React from "react";
import styles from "./style.module.css";

const TodoForm = ({ input, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form_todo}>
        <h1>Form Todo</h1>
        <div className={styles.form_todo__div}>
          <label htmlFor="name">Nama Todo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={handleChange}
            className={styles.form_todo__input}
            placeholder="Nama"
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.form_todo__div}>
          <label htmlFor="description">Deskripsi Todo</label>
          <textarea
            id="description"
            name="description"
            value={input.description}
            onChange={handleChange}
            className={styles.form_todo__input}
            placeholder="Deskripsi"
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
