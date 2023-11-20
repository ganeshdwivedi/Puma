"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Login() {
    const [input, setinput] = useState({ email: '', password:'', checkbox: false})


    return (
        <div className='w-[99vw] z-0 lg:mt-20  font-[FFDINforPumaW07-Regular-latin] relative overflow-x-clip '>
        <video className='w-[100vw] h-[150%] Register-video sm:hidden md:block' autoPlay muted loop >
            <source  src='https://static.videezy.com/system/resources/previews/000/053/100/original/4K-44.mp4' type='video/mp4' ></source>
        </video>
        <div className='m-36 sm:m-2 md:absolute md:top-[5%] md:left-[25%]'>
            <h1 className='text-4xl font-extrabold text-left lg:pl-20 pb-5  font-[FFDINforPumaW07-Bold-latin]'>My Account</h1>
            <div className='m-14 flex justify-center'>
                <form className='md:w-[37vw] sm:w-full' onSubmit={e=> {e.preventDefault}}>
                    <div className='flex justify-center flex-col items-center'>
                        <p className='font-bold'>Login / Register</p>
                        <hr className='h-[2px] w-full mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700' />
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                        <p className='text-slate-700 text-sm self-start'>Enter your email and password to log in</p>
                        <div className='flex flex-col my-3'>
                            <label className='text-sm font-bold'>Email</label>
                            <input onChange={(e)=>{
                                 setinput(e.target.value)
                            }} required name='email' className='md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black' type='email' placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col my-3 text-start'>
                            <label className='text-sm font-bold'>password</label>
                            <input onChange={(e)=>{
                                 setinput(e.target.value)
                            }} required name='password' className='md:w-[37vw] sm:w-full px-4 py-3 border border-solid border-black' type='password' placeholder='Enter your password' />
                        </div>
                        <div className='self-start'>
                            <input onChange={(e)=>{
                                 setinput(e.target.value)
                            }} required name='checkbox' type='checkbox' className='scale-150 my-6  active:ring-blue-900' />
                            <label className='text-slate-700 text-sm sm:text-xs sm:m-3 md:m-6'>Remember me on this Computer</label>
                        </div>
                        <button onClick={""} className='bg-slate-300 rounded-md px-[16vw] text-slate-900 py-5 font-bold'>Login</button>
                       <p className='text-xs m-3'>By logging in, I confirm that I have read and accept the Terms and Conditionsand the Privacy Policy.</p>
                         <Link href={"/Account/Register"} className='self-start'>Don't Have an account yet <span className='text-lg font-bold underline'>Register Here</span></Link>
                    </div>
                </form>
            </div>
        </div>
       </div>
    )
}

export default Login