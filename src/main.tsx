import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import "./index.css";
import MarkdownComponent from "./pages/Markdown";
import Now from "./pages/Now";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/:markdown",
    element: <MarkdownComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/now",
    element: <Now />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
