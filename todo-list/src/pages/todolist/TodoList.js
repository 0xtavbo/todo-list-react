import React from "react";
import { TodoListReducerProvider } from "../../context/TodoListReducer";
import { useLists } from "../../hooks/useLists";
import { ListContainerStyled } from "./TodoListStyles";

function List() {
  const { data, isLoading, isError, error } = useLists();

  return (
    <TodoListReducerProvider>
      <ListContainerStyled>
        <h3>Lists</h3>
        {data?.data.map((list) => (
          <>
            <p key={list.id}>{list.name}</p>
            <p>Cantidad de tareas: {list.tasks.length}</p>
            <ul>
              {list.tasks.map((task) => (
                <li key={task.id}>{task.description}</li>
              ))}
            </ul>
          </>
        ))}
      </ListContainerStyled>
    </TodoListReducerProvider>
  );
}

export default List;
