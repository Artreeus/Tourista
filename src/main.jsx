import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./components/private/PrivateRoute";
import AddTourist from "./components/Add_Tourist/AddTourist";
import MyList from "./components/my_list/MyList";
import JObDetails from "./components/JobDetails/JObDetails";
import AllTouristSpot from "./components/All_tourist_spot/AllTouristSpot";
import UpdateCpffee from "./components/UpdateCpffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/All_tourist_spot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("https://server-3qxh.vercel.app/coffee"),
      },
      {
        path: "/Add_Tourist",
        element: (
          <PrivateRoute>
            <AddTourist></AddTourist>
          </PrivateRoute>
        ),
      },
      {
        path: "/my_list",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("https://server-3qxh.vercel.app/coffee"),
      },
      {
        path: "updateCpffee/:id",
        element: <UpdateCpffee></UpdateCpffee>,
        loader: ({ params }) =>
          fetch(`https://server-3qxh.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/Job/:id",
        element: (
          <PrivateRoute>
            {" "}
            <JObDetails></JObDetails>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch(`https://server-3qxh.vercel.app/coffee`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
