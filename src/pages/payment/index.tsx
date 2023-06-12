import useGlobalStore from "../../store"
import  CheckoutForm from "../../components/checkout-form"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions } from "@stripe/stripe-js";
import Text from "../../components/text";
import { getCartTotal } from "../../helpers";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Payment = () => {


    const {clientSecret ,cart} = useGlobalStore()

    const cartTotal = getCartTotal(cart);

      const options :StripeElementsOptions= {
        clientSecret,
  
      };


  return (
    <div className="mx-[50px] my-[82px]">

      <div className="grid md:grid-cols-2 md:gap-40 gap-20">

 
     {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      <div>

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
    </div>
  )
}


export default Payment
