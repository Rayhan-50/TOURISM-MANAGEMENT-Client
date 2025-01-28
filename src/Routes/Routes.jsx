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
import ManageStories from "../pages/Dashboard/ManageStories/ManageStories";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ToristHome from "../pages/Dashboard/ToristHome/ToristHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ToristGuideHome from "../pages/Dashboard/ToristGuideHome/ToristGuideHome";
import MyAssignTour from "../pages/Dashboard/MyAssignTour/MyAssignTour";
import JoinTourGuide from "../pages/Dashboard/JoinTourGuide/JoinTourGuide";
import Intro from "../pages/Dashboard/Intro/Intro";



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
          path: 'intro',
          element:<Intro></Intro>
        },
        {
          path: 'toristProfile',
          element: <ToristHome></ToristHome>
        },
        {
          path: 'add-stories',
          element:<AddStorieses></AddStorieses>
        },
        {
          path: 'payment',
          element: <Payment></Payment>

        },
        {
           path:'paymentHistory',
           element: <PaymentHistory></PaymentHistory>
        },
        // torist guide
        {
          path:'guideProfile',
          element:<ToristGuideHome></ToristGuideHome>
        },
        {
          path:'myAssignTour',
          element:<MyAssignTour></MyAssignTour>
        },
        {
          path:'joinTourGuide',
          element:<JoinTourGuide></JoinTourGuide>
        },

        // admin routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },

        {
          path: 'manage-users',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'add-pakage',
          element: <AdminRoute><AddPakages></AddPakages></AdminRoute>
        },
        {
          path: 'manage-stories',
          element: <ManageStories></ManageStories>
        }
      ]

    }
  ]);
  