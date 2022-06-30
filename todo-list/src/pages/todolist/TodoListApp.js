import React from "react";
import TodoList from '../../components/todoList/TodoList';
import { TodoListReducerProvider } from '../../context/TodoListReducer';

function TodoListApp() {
  return (
    <>
      <TodoListReducerProvider>
        <div className="todolist-container">
          <h3>ToDo List</h3>
          <TodoList />
        </div>
      </TodoListReducerProvider>
    </>
  );
}

export default TodoListApp;