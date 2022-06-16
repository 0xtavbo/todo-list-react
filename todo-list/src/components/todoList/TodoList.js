import React, { useState, useContext } from "react";
import TodoListReducer from "../../context/TodoListReducer";
import { DivStyled, ButtonStyled, InputStyled } from "./TodoListStyles";
import TaskItem from "../taskItem/TaskItem";
import { addTask, removeAll } from "../../reducers/todoListReducer";

const TodoList = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, dispatch] = useContext(TodoListReducer);

  const handleAddTask = () => {
    if (taskDescription !== "") {
      dispatch(addTask(taskDescription));
      setTaskDescription("");
    }
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
    console.log(tasks.length);
    console.log(tasks);
  }

  const handleTaskDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <>
      <DivStyled>
        <InputStyled
          type="text"
          onChange={handleTaskDescription}
          placeholder="Add your task details here..."
          value={taskDescription || ''}
        />
        <ButtonStyled onClick={handleAddTask}>Add task</ButtonStyled>
      </DivStyled>
      <ButtonStyled onClick={handleRemoveAll}>Remove all</ButtonStyled>

      { tasks.length
          ? tasks.map((todo, id) => { return <TaskItem key={id} description={todo.description} /> })
          : (<p>You don't have any pending tasks in your list</p>)
      }
    </>
  );
};

export default TodoList;