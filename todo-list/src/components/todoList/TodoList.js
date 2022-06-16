import React, { useState, useContext } from "react";
import TodoListReducer from "../../context/TodoListReducer";
import { ButtonStyled, InputStyled } from "./TodoListStyles";
import TaskItem from "../taskItem/TaskItem";
import { addTask, removeAll } from "../../reducers/todoListReducer";

const TodoList = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, dispatch] = useContext(TodoListReducer);

  const handleAddTask = () => {
    dispatch(addTask(taskDescription));
    setTaskDescription("");
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
  }

  const handleTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <>
      <InputStyled
        type="text"
        onChange={handleTaskDescription}
        placerholder="Add your task details here..."
      />
      <ButtonStyled onClick={handleAddTask}>Add task</ButtonStyled>
      <ButtonStyled onClick={handleRemoveAll}>Remove all</ButtonStyled>

      { tasks.length
          ? tasks.map((todo, id) => { return <TaskItem key={id} description={todo.description} /> })
          : `You don't have any tasks in your list`
      }
    </>
  );
};

export default TodoList;