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
import UserDetails from "./assets/UserDetails/UserDetails";

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
        loader: () => fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s=') ,
        element:<Users></Users>
      },
      {
        path:'/user/:1',
        element:<UserDetails></UserDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);