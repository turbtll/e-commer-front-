
import clsx from "clsx"
import Button from "../../components/button"
import Text from "../../components/text"
import {useForm} from "react-hook-form"
import Icon from "../../components/icons"

 const ShippingAddress = () => {
  type FromData= {
    firstName :string
    lastName:string
    postalCode:string
    address:string
  }

  const {register,setValue,handleSubmit,getValues ,formState:{errors}} = useForm <FromData>()
  const onSubmit = handleSubmit((e)=>{
    alert(e)
  })

  
  return (
    <div className="my-[82px] mx-[50px]">
      <Text variant="heading-three" className="mb-7"> Shipping address</Text>

      <form className="max-w-xl">
        <div className="flex space-x-[18px]">


        <div className="flex flex-col items-start space-y-3 w-full">
          <label htmlFor="first-name" className="text-base font-semibold">
           First Name
          </label>
          <input {...register("firstName",{
            required:true,
            minLength:3,
            maxLength:30
          })}  id="first-name" type="text" placeholder="Firstname" className={clsx("p-5 border border-silver rounded-[18px] w-full",
         {
          "focus:outline-red focus:ring-red ":errors.firstName
         } ,)}/>

         {errors.firstName && (  
         <span className="flex space-x-3 ">
          <Icon name="exclamation-triangle-icon"/>
          <span className="text-red">Required Firstname</span>
          </span>)
        
         }
        </div>
        <div className="flex flex-col items-start space-y-3 w-full">
          <label htmlFor="last-name" className="text-base font-semibold">
           Last Name
          </label>
          <input {...register("lastName" ,{
            required:true,
            minLength:3,
            maxLength:30
          })}  id="last-name" type="text" placeholder="Lastname" className={clsx("p-5 border border-silver rounded-[18px] w-full",
          {
           "focus:outline-red focus:ring-red ":errors.lastName
          } ,)}/>

        {errors.lastName && (  
         <span className="flex space-x-3">
          <Icon name="exclamation-triangle-icon"/>
          <span className="text-red">Required Lastname</span>
          </span>)
 }
        </div>
        </div>

        <div className="flex flex-col items-start my-7">
          <label htmlFor="postal-code" placeholder="postal-code"  className="text-base font-semibold"> Postal code</label>
          <input {...register("postalCode",{
            required:true,
            minLength:3,
            maxLength:6
          })}  id="postal-code" type="text" className={clsx("p-5 border border-silver rounded-[18px] w-full",
          {
           "focus:outline-red focus:ring-red ":errors.postalCode
          } ,)} />

{errors.postalCode && (  
         <span className="flex space-x-3">
          <Icon name="exclamation-triangle-icon"/>
          <span className="text-red">Required Postal code</span>
          </span>)
 }
        </div>

        <div className="flex flex-col items-start my-7">
          <label htmlFor="address" placeholder="address"  className="text-base font-semibold"> Address</label>
          <input {...register("address",{
            required:true,
            minLength:3,
            maxLength:60
          })}  id="address" type="text" className={clsx("p-5 border border-silver rounded-[18px] w-full",
          {
           "focus:outline-red focus:ring-red ":errors.address
          } ,)} />

{errors.address && (  
         <span className="flex space-x-3">
          <Icon name="exclamation-triangle-icon"/>
          <span className="text-red">Required Address</span>
          </span>)
 }
        </div>
    <div className="flex justify-end mt-7">
    <Button onClick={onSubmit} >CONTINUE TO PAYMENT</Button>
    </div>
      
      </form>
    </div>
  )
}

export default ShippingAddress
