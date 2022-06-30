import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import TodoListApp from "../pages/todolist/TodoListApp";
import Home from "../pages/home/Home";
import Pokedex from "../pages/pokedex/Pokedex";
import Layout from "../components/layout/Layout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="todolist" element={<TodoListApp />} />
          <Route path="pokedex" element={<Pokedex />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;