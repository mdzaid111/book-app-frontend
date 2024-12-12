import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPge from "../pages/books/CartPge";
import CheckoutPage from "../pages/books/CheckoutPage";

import SingleBooks from "../pages/books/SingleBooks";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashbard";
import ManageBook from "../pages/dashboard/manageBooks/ManageBook";
import AddBook from "../pages/dashboard/addBook/AddBook";
import UserDashboard from "../pages/dashboard/users/UserDashboard";
import UpdateBook from "../pages/dashboard/EditBook/UpdateBook";



const router = createBrowserRouter([
    {
        path: "/" ,
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage/></PrivateRoute>
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/Register",
                element:<Register/>
            },
            {
                path:"/cart",
                element:<CartPge/>
            },
            {
                path:"/checkout",
                element:<PrivateRoute><CheckoutPage/></PrivateRoute>

            },
            {
                path:"/books/:id",
                element:<SingleBooks/>
            },
            
                {
                    path: "/user-dashboard",
                    element: <PrivateRoute><UserDashboard/></PrivateRoute>
                  }
            

            
            
            
        ]
    },
    {
        path:"/admin",
        element:<AdminLogin/>

    },
    {
        path: "/dashboard" ,
        element: <AdminRoute><DashboardLayout/></AdminRoute>,
        children:[
            {
                path:"",
                element: <AdminRoute><Dashboard/></AdminRoute>
            },
            {
                path:"add-new-book",
                element:<AdminRoute><AddBook/></AdminRoute>
            },
            {
                path:"edit-book/:id",
                element:<AdminRoute><UpdateBook/></AdminRoute>
            },
            {
                path:"manage-books",
                element:<AdminRoute><ManageBook/></AdminRoute>
            }
        ]
    }
]);

export default router ;