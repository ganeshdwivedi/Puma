import React from 'react'
import Link from 'next/link'

function Button({
   text,
   onClick,
   href,
   target,
   className = "bg-black" 
}) {
  return (<>
  <div className='text-center my-3 cursor-pointer'>
   <Link href={`${href}`} target={target} className={`${className} font-bold px-5 py-3 `}>
    {text}
   </Link>
   </div>
    </>
  )
}

export default Button