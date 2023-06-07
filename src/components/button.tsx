import { ReactNode } from "react"
import clsx from "clsx"

type  Size= "small" | "large" | "medium"

const sizes  : Record<Size,string>= {
    large: "py-5 px-20  rounded-[18px] bg-violet-blue text-white hover:bg-periwinkle hover:text-raising-black duration-300 transition-all uppercase text-base font-semibold text-raising-black",
    medium: "py-4 px-[18px]  rounded-[14px] bg-violet-blue text-white hover:bg-periwinkle hover:text-raising-black duration-300 transition-all uppercase text-base font-semibold text-raising-black",
    small: "px-[18px] py-3 rounded-[18px] bg-violet-blue text-white hover:bg-periwinkle hover:text-raising-black duration-300 transition-all uppercase text-base font-semibold text-raising-black"
}

type ButtonProps = {
    children?: ReactNode | ReactNode[]
    size? :Size

} & JSX.IntrinsicElements["button"]

const   Button = ( {children,size="small",disabled,className,...props}: ButtonProps) => {
  return (
  <button className={clsx( 
    sizes[size], 
    {
    "bg-silveer  hover:bg-silveer hover:text-white cursor-not-allowed":disabled
  },className)}
  disabled = {disabled}
  {...props}>
    {children}
  </button>

  )
}

export default Button