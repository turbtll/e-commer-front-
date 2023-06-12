import { useEffect } from "react"
import useGlobalStore from "../../store"


export const Success = () => {
    const {emptyCart} = useGlobalStore()
   

    useEffect(()=>{
      emptyCart()
    },[])

  return (
    <div className="h-screen flex items-center justtify-center">Payment successfull</div>
  )
}

export default Success
