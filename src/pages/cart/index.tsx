import useGlobalStore from "../../store";
import Text from "../../components/text";
import Icon from "../../components/icons";
import { toast } from "react-hot-toast";
import { getCartTotal } from "../../helpers";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, addItemToCart, removeItemFromCart } = useGlobalStore();
  const cartTotal = getCartTotal(cart);
  const navigate = useNavigate();
  return (
    <section className="mx-[50px]">
      <Text variant="heading-one" className="my-[82px]">
        Shopping cart
      </Text>
      <div className="md:space-y-[164px] space-y-[64px]">
        {cart.map((cartItem) => {
          return (
            <div className="md:flex md:items-start md:justify-between " key={cartItem.id}>
              <div className="md:mr-[50px]">
                <img
                
                  className="md:w-[500px] w-full md:h-[300px] rounded-[18px] mr-[46px]"
                  src={cartItem.image}
                  alt={cartItem.name}
                />
              </div>

              <div className="flex flex-col w-full justify-between mt-[20px]">
                <div className="flex justify-between">
                  <Text variant="subheading-two">{cartItem.name}</Text>
                  <Text variant="subheading-two">${cartItem.price}</Text>
                </div>
                <div className="md:mt-[124px] mt-[24px] flex items-center justify-center md:justify-normal spance-x-7 ">
                  <button
                    onClick={() => {
                      removeItemFromCart(cartItem);
                      toast.error("Cart item removed");
                    }}
                  >
                    <Icon name="minus-icon" />
                  </button>

                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => {
                      addItemToCart({
                        image: cartItem.image,
                        name: cartItem.name,
                        price: cartItem.price,
                        product: cartItem.product,
                      });
                      toast.success("item added to cart");
                    }}
                  >
                    <Icon name="plus-icon" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-[82px]">
        <div className="border-[1.8px] border-black"></div>
      </div>

      <div className="flex items-center justify-between mb-[82px]">
        <Text variant="subheading-two"> subtotal</Text>
        <Text variant="subheading-two"> USD $ {cartTotal}</Text>
      </div>

      <Button
        onClick={() => {
          navigate("/checkout/shipping");
        }}
        size="large"
        className="mb-[180px] w-full"
      >
        Proceed to Check out
      </Button>
    </section>
  );
};

export default Cart;
