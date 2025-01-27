import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./Home.module.css";
import Todos from "./Todos";
import NewTodo from "./NewTodo";
const dummyTodos = [
  {
    id: uuidv4(),
    title: "After waking up in the morning.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uuidv4(),
    title: "Before leaving for office",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);
  // handler functions
  const handleDeleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const handleNewTodo = (newTodo) => {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };
  return (
    <div className={styles["container"]}>
      <NewTodo oneNewTodo={handleNewTodo} />
      <Todos todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Home;
