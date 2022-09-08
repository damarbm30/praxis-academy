import React from "react";
import { ACTIONS } from "./TodoApp";

export const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <li>
        <span style={{ color: todo.isComplete ? "#AAA" : "#000" }}>{todo.name}</span>
      </li>
      <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>Toggle</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
    </>
  );
};
