import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Instructors from './Instructors/Instructors.jsx';
import Classes from './Classes/Classes.jsx';
import Signup from './Signup/Signup.jsx';
import AuthProvider from "./Providers/AuthProvider.jsx"
import PrivaterRoute from './Private/PrivaterRoute.jsx';
import User from './Home/User.jsx';
import Cart from './Dashboard/Cart.jsx';
import Profile from './Instructors/Profile.jsx';
import DashboardHome from './Dashboard/DashboardHome.jsx';
import PaymentHistory from './Dashboard/PaymentHistory.jsx';
import UserProfile from './Dashboard/UserProfile.jsx'
import Allusers from './Dashboard/Admin/Allusers.jsx';
import PrivateRoute from './Private/PrivaterRoute.jsx';
import Payment from './Dashboard/Payment.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AddClass from './Dashboard/AddClass.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
      path: "/instructors",
      element: <PrivaterRoute><Instructors></Instructors></PrivaterRoute>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/profile",
        element: <User></User>,
      },
      // {
      //   path: "/cart",
      //   element: <PrivaterRoute><Cart></Cart></PrivaterRoute>,
      // },
      {
        path: "/instructors/:id",
        element: <Profile></Profile>,
      },

    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>,
    children: [
      {
        path: "cart",
        element: <PrivaterRoute><Cart></Cart></PrivaterRoute>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "userprofile",
        element: <PrivaterRoute><UserProfile></UserProfile></PrivaterRoute>,
      },
      {
        path: "allusers",
        element: <Allusers></Allusers>,
      },
      {
        path: "addclasses",
        element: <AddClass></AddClass>,
      },
      {
        path: "cart/payment",
        element: <Payment></Payment>
      }      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

   
<HelmetProvider>
<AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
</HelmetProvider>
   
  </React.StrictMode>,
)
