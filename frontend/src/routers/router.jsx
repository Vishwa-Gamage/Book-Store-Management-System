 import { createBrowserRouter } from "react-router-dom";
 import App from "../App.jsx";
 import Home from "../pages/home/Home";
 import Login from "../components/Login";
 import Register from "../components/Register";
 import CartPage from "../pages/books/CartPage.jsx";
import CheckoutPage from "../pages/books/CheckoutPage.jsx";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      

        },
        {
            path:"/orders",
            element: <div>Orders Page</div>,
            },
            {
            path: "/about",
            element: <div>About Us</div>,
        },
         {
          path:"/login",
          element: <Login/>,
        },
       
        {
          path:"/register",
          element: <Register/>,
        },
        {
          path: "/cart",
          element: <CartPage/>,
        },
        {
          path: "/checkout",
          element: <CheckoutPage/>,
        }
    ]
  },
 ]);

 export default router;