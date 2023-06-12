


import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Root from "./routers/root"
import Home from "./pages/home"
import Cart from "./pages/cart"
import Shop from "./pages/shop"
import About from "./pages/about"
import ProductDetails from "./pages/product-details"
import Payment from "./pages/payment"
import ShippingAddress from "./pages/shipping-address"
import Success from "./pages/success"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/shop/:id",
        element:<ProductDetails/>
      },
      {
        path:"/checkout/shipping",
        element:<ShippingAddress/>
      },
      {
        path:"/checkout/payment",
        element:<Payment/>
      },
      {
        path:"/success",
        element:<Success/>
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App
