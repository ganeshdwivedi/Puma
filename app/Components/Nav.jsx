"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Nav() {
    const item = useSelector((state) => state.cart)
    const pathname = usePathname()
    const [toggle, settoggle] = useState("sm:hidden")
    const [count, setcount] = useState(0)
    const [menu, setmenu] = useState("Menu")
    const Toggle = () => {
        if (count == 0) {
            setmenu(<p className='text-black font-bold bg-slate-100 px-2 rounded-sm text-xl'>X</p>);
            setcount(1);
            settoggle("sm:block");
        } else {
            setmenu("Menu");
            setcount(0);
            settoggle("sm:hidden");
        }
    }

    return (
        <>
            <nav className='relative '>
                <div className='flex bg-black flex-row justify-between z-50 md:h-20 sm:h-[10vh] top-0 fixed w-full px-10'>

                    <div className='w-20 self-center '>
                        <Link href={"/"}>
                            <img className='invert grayscale sepia brightness-0 sm:w-10' src='https://cdn.iconscout.com/icon/free/png-512/free-puma-3421676-2854595.png?f=webp&w=256' />
                        </Link>
                    </div>
                    <div className={`Navigation-menu  md:mt-[3.5vh]`}>
                        <ul className={`flex-row flex  gap-4 text-white  text-lg font-bold`}>
                            <li className=''>
                                <Link className={`link ${pathname === '/' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/'>Home</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Men' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href={"/Men"}>Men</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Women' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href={"/Women"}>Women</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Kid' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/Kid'>Kids</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/About' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/About'>About</Link>
                            </li>
                            <li className=''>
                                <Link className={`link ${pathname === '/Contact' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/Contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-row gap-5  items-center ld:order-1 sm:order-none md:order-1'>
                        <div className='w-6 sm:justify-self-end'>
                            <Link href={"/Wishlist"}>
                            <FavoriteBorderIcon className='text-white' fontSize='medium'/>
                            </Link>
                        </div>
                        <div className='w-6'>
                            <Link href={"/Cart"}>
                               <p className='text-white bg-[#3d3d3e] rounded-3xl absolute font-extrabold  px-2 sm:top-[7%] md:top-[15%] text-sm'>{item.length}</p>
                                <ShoppingCartIcon className='text-white' fontSize='medium'/>
                            </Link>
                        </div>
                        <div className='sm:hidden md:block w-6'>
                            <Link href={"/Account"}>
                            <AccountCircleIcon className='text-white' fontSize='medium'/>
                            </Link>
                        </div>
                        <div>
                            <button onClick={Toggle} className='text-white Hamburger'>{menu}</button>
                        </div>
                    </div>
                </div>

            </nav>
            <div className={`pt-24 z-50 mobile-Nav fixed top-[10vh] backdrop-blur-[7px] bg-gradient-to-br from-black bg-opacity-40  text-white h-[100vh] ${toggle}`}>
                <ul className={`ml-[5vw] flex-col flex text-lg font-bold`}>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/'>Home</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/Men' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href={"/Men"}>Men</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/Women' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href={"/Women"}>Women</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/Kid' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/Kid'>Kids</Link>
                    </li>
                    <li className='pb-3'>
                        <Link className={`link ${pathname === '/About' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/About'>About</Link>
                    </li>
                    <li className='mb-4'>
                        <Link className={`link ${pathname === '/Contact' ? 'underline decoration-2 underline-offset-4 decoration-white' : ''} hover:underline decoration-2 underline-offset-4 decoration-orange-900 hover:text-white`} href='/Contact'>Contact</Link>
                    </li>
                    <li className='mb-6'>
                        <Link className='text-lg font-bold  px-4 py-2 border-solid border-2 ' href={'/Account/Login'}>Login</Link>
                    </li>
                    <li className='mt-1'>
                        <Link className=' text-lg bg-white text-black font-bold  px-4 py-2 border-solid border-2 ' href={'/Account/Register'}>Register</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav