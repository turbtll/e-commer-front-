
import Logo from "./icons/logos"
import Icon  from "./icons"
import Text from "./text"
import { Link } from "react-router-dom"



const Header = () => {
  return (
   <header className=" flex item-center justify-between p-[8px] px-[12px] rounded-[26px] mt-[18px] mx-[50px] bg-[#f5f5f5] backdrop-blur-[10px]">

        <Link to={"/"}> <Logo/></Link>

        <div className="flex flex-row items-center space-x-[38px]">
          <Link to={"/shop"}><Text variant="caption-one" >Shop</Text></Link>
          <Link to={"/about"}><Text variant="caption-one" >About</Text></Link>
          <Link to={"/cart"}>
          <Icon name="cart-icon"></Icon>
          </Link>

        
        </div>
   </header>
  )
}

export default Header
