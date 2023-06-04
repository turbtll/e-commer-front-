import clsx from "clsx"

type Variant = "heading-one" |  "heading-two" |  "heading-three" |"heading-four"  | "subheading-one"
| "subheading-two"| "subheading-three" |  "body-one"|  "body-two"|  "body-three" |"caption-one" | "caption-two"|"caption-three"|"caption-four"

type TextProps = {
  children : React.ReactNode | React.ReactNode[]
  variant :Variant
  className?: string
}


const variants  : Record<Variant,string >= {
  "heading-one" : "text-[50px] font-bold leading-[64px] text-raising-black",
  "heading-two" : "text-[40px] font-bold leading-[51px] text-raising-black",
  "heading-three" : "text-[32px] font-bold leading-[41px] text-raising-black",
  "heading-four" : "text-[24px]  font-bold leading-[31px] text-raising-black",
  "subheading-one" : "text-[28px] leading-[42px] font-semibold",
  "subheading-two" : "text-[20px] leading-[30px] font-semibold",
  "subheading-three" : "text-[16px] leading-[24px] font-semibold",
  "body-one" : "text-[28px] leading-[42px] text-raising-black",
  "body-two" : "text-xl leading-[30px] text-raising-black",
  "body-three" : "text-base text-raising-black",
  "caption-one": "uppercase text-base text-raising-black",
  "caption-two": "uppercase text-base font-semibold text-raising-black" ,
  "caption-three": "uppercase text-base font-semibold text-raising-black",
  "caption-four": "uppercase text-xs leading-[18px]  text-raising-black",
 

}


 const Text = ({children ,variant="body-one" ,className ,...props}:TextProps) => {
  return    <p className={clsx(variants[variant],className)} {...props}>
  {children}
</p>


}

export default Text
