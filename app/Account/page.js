import React from 'react'
import Link from 'next/link'


function page() {
  return (
   <>
    <div className=' font-[FFDINforPumaW07-Bold-latin] mt-32 mx-10 flex flex-row justify-center gap-x-10'>
    <div className='m-4'>
      <h1 className='text-xl'>If you already Have an Account</h1>
      <p className='mb-5'>Please Login</p>
      <Link className='bg-blue-300 px-7 py-3 rounded-md' href={"/Account/Login"}>Login</Link>
    </div>
    <div className='m-4'>
      <h1 className='text-xl'>If you Don't Have an Account</h1>
      <p className='mb-5'>Please Register</p>
      <Link className='bg-blue-300 px-7 py-3 rounded-md' href={"/Account/Register"}>Register</Link>
    </div>
    </div>
    
   </>
  )
}

export default page