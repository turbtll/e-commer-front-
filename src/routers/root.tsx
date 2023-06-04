import { Outlet } from "react-router-dom"
import Inspx from "inspx"
import Header from "../components/header"
import Footer from "../components/footer"
const Root = () => {
  return (
        
    <Inspx>   
    <Header/>
    <Outlet/>
    <Footer/>
    </Inspx>
  )
}

export default Root
