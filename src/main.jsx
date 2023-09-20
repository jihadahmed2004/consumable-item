import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./assets/Home/Home";
import About from "./assets/About/About";
import Contact from "./assets/Contact/Contact";
import Users from "./assets/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home> </Home>,
    children: [
      {
        path: "/about",
        element: <About></About> ,
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/users",
        loader: () => fetch ('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772') ,
        element:<Users></Users>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);