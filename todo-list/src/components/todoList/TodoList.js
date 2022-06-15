import React, { useState, useContext } from "react";
import TodoListReducer from "../../context/TodoListReducer";
import { TYPES } from "../../actionTypes/actions";
import { AddButtonStyled, InputStyled } from "./TodoListStyles";
import RemoveAll from "../removeAll/RemoveAll";
import TaskItem from "../taskItem/TaskItem";

const TodoList = () => {
  const [state, dispatch] = useContext(TodoListReducer);
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    dispatch({ type: TYPES.ADD_TASK, description: taskDescription });
    console.log(state);
  }

  const handleTaskDescription = (e) => {
      console.log(state.todos.length > 0);
      console.log(e.target.value);
      setTaskDescription(e.target.value);
  };

  return (
    <>
      <InputStyled onChange={handleTaskDescription}/>
      <AddButtonStyled onClick={handleAddTask}>
          Add task
      </AddButtonStyled>
      { state.todos.length && state.todos.map((todo) => {
          <TaskItem description={todo.description} />
      })}
    </>
  );
};

export default TodoList;