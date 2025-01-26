import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Community from "../pages/Community/Community";
import Trips from "../pages/Trips/Trips";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import PackageDetails from "../pages/Home/pakageDetails/pakageDetails";
import TourGuideProfile from "../pages/Home/TourGuideProfile/TourGuideProfile";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddPakages from "../pages/Dashboard/AddPakages/AddPakages";
import AdminRoute from "./AdminRoute";
import AddStorieses from "../pages/Dashboard/AddStorieses/AddStorieses";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path:'/community',
          element: <PrivateRoute><Community></Community></PrivateRoute>
        },
        {
          path:'/about',
          element: <AboutUs></AboutUs>
        },
        {
          path:'/trips',
          element: <Trips></Trips>
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/packages/:id',
          element: <PackageDetails></PackageDetails>,
        },
        {
          path: '/guides/:id',
          element: <TourGuideProfile></TourGuideProfile>,
        },
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path: 'cart',
          element:<Cart></Cart>
        },
        {
          path: 'add-stories',
          element:<AddStorieses></AddStorieses>
        },
        // admin routes

        {
          path: 'manage-users',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'add-pakage',
          element: <AdminRoute><AddPakages></AddPakages></AdminRoute>
        }
      ]

    }
  ]);
  