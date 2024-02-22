import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<>...</>}>//list page</React.Suspense>
        ),
      },
      {
        path: "task",
        element: (
          <React.Suspense fallback={<>...</>}>//add task page</React.Suspense>
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
