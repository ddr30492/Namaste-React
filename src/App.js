import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";


//chunking
//code splitting
//dynamic building
//lazy loading
// on demand loading
// dynamically import on demand
// why suspensed is uder 
const Grocery = lazy(() => import("./components/Grocery"));

/** main app-layout component */
const AppLayout = () => {

  const [user, setUser] = useState({ name: "" });

  const setUserName = (name) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: name,
    }));
  };

  // set the authentication state
  useEffect(() => {
    // Simulate user data fetch
    const userInfo = {
      name: "Badshah Darji",
    };
    setUser(userInfo);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUserName }}>
      <div className="app-layout"> 
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        path: "/grocery",
        element: <Suspense fallback={<h2>loading....</h2>}>
            <Grocery />
          </Suspense>,
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
