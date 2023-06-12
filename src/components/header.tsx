import Logo from "./icons/logos";
import Icon from "./icons";
import Text from "./text";
import { Link } from "react-router-dom";
import { getCartLength } from "../helpers";
import useGlobalStore from "../store";

const Header = () => {
  const { cart } = useGlobalStore();
  const itemsInCart = getCartLength(cart);

  return (
    <header className=" flex item-center justify-between md:p-[8px] px-[12px] md:rounded-[26px] mt-[18px] md:mx-[50px] bg-[#f5f5f5] backdrop-blur-[10px]">
      <Link to={"/"}>
  
        <Logo />
      </Link>

      <div className="flex flex-row items-center space-x-[38px]">
        <Link to={"/shop"}>
          <Text variant="caption-one" className="text-xs md:text-base">Shop</Text>
        </Link>
        <Link to={"/about"}>
          <Text variant="caption-one" className="text-xs md:text-base" >About</Text>
        </Link>
        <Link to={"/cart"} className="relative">
          <Icon name="cart-icon"></Icon>
          <span className="absolute -right-2 -top-2 bg-white rounded-full w-[18px] h-[18px] flex items-center justify-center">
            {itemsInCart}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
