import React from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import List from "../pages/todolist/TodoList";
import Home from "../pages/home/Home";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/lists" element={<List />} />
      {/* <Route path="/create" element={<CreateList />} /> */}
    </ReactDomRoutes>
  );
};

export default Routes;
