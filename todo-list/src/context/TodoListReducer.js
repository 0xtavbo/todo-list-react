import React, { useReducer, createContext } from "react";
import { todoListInitialState, todoListReducer } from "../reducers/todoListReducer";

const TodoListReducer = createContext();

const TodoListReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoListReducer, todoListInitialState);

  const data = [state, dispatch];

  return <TodoListReducer.Provider value={data}>{children}</TodoListReducer.Provider>;
};

export { TodoListReducerProvider };

export default TodoListReducer;