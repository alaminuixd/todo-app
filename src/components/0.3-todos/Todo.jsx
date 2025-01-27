import React from "react";

import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todo.module.css";
const Todo = ({ id, title, body, onDeleteTodo }) => {
  const handleDelete = (id) => {
    onDeleteTodo(id);
  };
  return (
    <div key={id} className={styles["todo-wrapper"]}>
      <div className={styles["todos"]}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div
        className={styles["delete-todo"]}
        title="Are you sure?"
        onClick={() => handleDelete(id)}
      >
        <FaTrashCan />
      </div>
    </div>
  );
};

export default Todo;
