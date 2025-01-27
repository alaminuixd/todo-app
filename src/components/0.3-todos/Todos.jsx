import React from "react";

import styles from "./Todos.module.css";
import Todo from "./Todo";

const Todos = ({ todos, onDeleteTodo }) => {
  return (
    <div className={styles["todos-container"]}>
      {todos.length > 0 ? (
        todos.map((todo) => {
          return <Todo key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} />;
        })
      ) : (
        <h3>No Todos found!</h3>
      )}
    </div>
  );
};

export default Todos;
