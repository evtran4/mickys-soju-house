import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Menu",
    element: <App></App>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);