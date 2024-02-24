import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import AddTask from "../pages/addTask/AddTask";
import TaskList from "../pages/taskList/TaskList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<>...</>}>
            <TaskList />
          </React.Suspense>
        ),
      },
      {
        path: "task",
        element: (
          <React.Suspense fallback={<>...</>}>
            <AddTask />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <p>not found</p>,
  },
]);

export default routes;
