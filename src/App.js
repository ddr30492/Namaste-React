import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

/** main app-layout component */
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { 
        path: "/", 
        element: <Body /> 
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
