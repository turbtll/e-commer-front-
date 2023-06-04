


import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Root from "./routers/root"
import Home from "./pages/home"
import Cart from "./pages/cart"
import Shop from "./pages/shop"
import About from "./pages/about"
import ProductDetails from "./pages/product-details"


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
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App
