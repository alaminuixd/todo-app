import React, { useEffect, useRef, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import styles from "./NewTodo.module.css";

const NewTodo = ({ oneNewTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
    body: "",
  });
  const [err, setErr] = useState(null);
  const [success, setSuccess] = useState(false);
  const timeoutRef = useRef(null);
  useEffect(() => {
    if (err) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to clear the error after 2 seconds
      timeoutRef.current = setTimeout(() => {
        setErr(null);
        timeoutRef.current = null; // Reset the ref
      }, 2000);
    }

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [err]);

  // handler functions
  const handleInputChange = (e) => {
    setErr(null);
    setSuccess(false);
    const { name, value } = e.target;
    setNewTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.title.trim() || !newTodo.body.trim()) {
      setErr((error) => "Please provide both fields.");
      setSuccess(false);
      return;
    }
    const newTodoWithId = {
      ...newTodo,
      id: uuidv4(),
    };
    oneNewTodo(newTodoWithId);
    setNewTodo({
      title: "",
      body: "",
    });
    setSuccess(true);
    setErr(null);
    console.log(typeof oneNewTodo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Todo Title"
        value={newTodo.title}
        onChange={handleInputChange}
      />
      <textarea
        name="body"
        placeholder="Todo Details"
        value={newTodo.body}
        onChange={handleInputChange}
      ></textarea>
      {success && (
        <p className={styles["success"]}>New todo added successfully!</p>
      )}
      {err && <p className={styles["warning"]}>{err}</p>}
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default NewTodo;
