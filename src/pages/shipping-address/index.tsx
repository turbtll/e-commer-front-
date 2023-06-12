import clsx from "clsx";
import Button from "../../components/button";
import Text from "../../components/text";

import { useForm } from "react-hook-form";
import Icon from "../../components/icons";
import useGlobalStore from "../../store";
import { getCartTotal } from "../../helpers";
import { ICartItem } from "../../types";
import axiosProd from "../../api/axios";
import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {

  const navigate = useNavigate()
  type FromData = {
    name: string;
    email: string;
    city: string;
    address: string;
  };

  type OrderDetailsType = {
    user: {
      name: string;
      email: string;
    };
    deliveryAddress: {
      address: string;
      city: string;
    };
    orderItems: ICartItem[];
  };

  const { cart,updateClientSecret } = useGlobalStore();

  const cartTotal = getCartTotal(cart);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FromData>();
  const onSubmit = handleSubmit(async () => {
    try {
      const { address, city, email, name } = getValues();
      const orderDetails: OrderDetailsType = {
        deliveryAddress: {
          address,
          city,
        },
        user: {
          email,
          name,
        },
        orderItems: cart,
      };

      const response = await axiosProd.post("/orders", {
        ...orderDetails,
      });

      console.log(response);
      updateClientSecret(response.data.clientSecret)

      navigate('/checkout/payment')
    } catch (error) {
      console.log(error)
    }
  });

  return (
    <div className="my-[82px] mx-[50px]">
      <Text variant="heading-three" className="mb-7">
        Shipping address
      </Text>
      <div className="grid md:grid-cols-2 gap-20 md:gap:10">
        <form className="max-w-xl">
          <div className="flex space-x-[18px]">
            <div className="flex flex-col items-start space-y-3 w-full">
              <label htmlFor="name" className="text-base font-semibold">
                Name
              </label>
              <input
                {...register("name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                id="Name"
                type="text"
                placeholder="name"
                className={clsx("p-5 border border-silver rounded-[18px] w-full", {
                  "focus:outline-red focus:ring-red ": errors.name,
                })}
              />

              {errors.name && (
                <span className="flex space-x-3 ">
                  <Icon name="exclamation-triangle-icon" />
                  <span className="text-red">Required name</span>
                </span>
              )}
            </div>
            <div className="flex flex-col items-start space-y-3 w-full">
              <label htmlFor="email" className="text-base font-semibold">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                id="email"
                type="text"
                placeholder="email"
                className={clsx("p-5 border border-silver rounded-[18px] w-full", {
                  "focus:outline-red focus:ring-red ": errors.email,
                })}
              />

              {errors.email && (
                <span className="flex space-x-3">
                  <Icon name="exclamation-triangle-icon" />
                  <span className="text-red">Required email</span>
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start my-7">
            <label htmlFor="city" placeholder="city" className="text-base font-semibold">
              City
            </label>
            <input
              {...register("city", {
                required: true,
                minLength: 3,
                maxLength: 6,
              })}
              id="city"
              placeholder="city"
              type="text"
              className={clsx("p-5 border border-silver rounded-[18px] w-full", {
                "focus:outline-red focus:ring-red ": errors.city,
              })}
            />

            {errors.city && (
              <span className="flex space-x-3 my-3">
                <Icon name="exclamation-triangle-icon" />
                <span className="text-red">Required City</span>
              </span>
            )}
          </div>

          <div className="flex flex-col items-start my-7">
            <label
              htmlFor="address"
              placeholder="address"
              className="text-base font-semibold"
            >
              Address
            </label>
            <input
              {...register("address", {
                required: true,
                minLength: 3,
                maxLength: 60,
              })}
              id="address"
              placeholder="address"
              type="text"
              className={clsx("p-5 border border-silver rounded-[18px] w-full ", {
                "focus:outline-red focus:ring-red ": errors.address,
              })}
            />

            {errors.address && (
              <span className="flex space-x-3 my-3">
                <Icon name="exclamation-triangle-icon" />
                <span className="text-red">Required Address</span>
              </span>
            )}
          </div>
          <div className="flex justify-end mt-7">
            <Button onClick={onSubmit}>CONTINUE TO PAYMENT</Button>
          </div>
        </form>
        <div className="">
          <div className="space-y-7">
            {cart.map((cartItem) => {
              return (
                <div className="flex items-start  " key={cartItem.id}>
                  <div className="mr-[50px]">
                    <img
                      width={170}
                      height={170}
                      className="w-[170px] h-[170px] rounded-[18px] mr-[46px]"
                      src={cartItem.image}
                      alt={cartItem.name}
                    />
                  </div>

                  <div className="flex flex-col flex-1 justify-between ">
                    <div className="flex justify-between">
                      <Text variant="subheading-three">{cartItem.name}</Text>
                      <Text variant="subheading-three">
                        $ {cartItem.price} X {cartItem.quantity}
                      </Text>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Subtotal</Text>
            <Text variant="subheading-three">$ {cartTotal}</Text>
          </div>
          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Shipping</Text>
            <Text variant="subheading-three">Calculated at next step</Text>
          </div>
          <div className="mt-[46px] mb-10 h-[1.9px] bg-black"></div>
          <div className="mt-10 flex justify-between">
            <Text variant="body-three">Total</Text>
            <Text variant="subheading-three">$ {cartTotal}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
