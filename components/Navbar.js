"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className='bg-black h-16 z-10 sticky top-0 text-white hover:text-gray-200 flex justify-between items-center px-5'>
                <div className="logo cursor-pointer flex flex-row items-center gap-2">
                    <div className="navimage w-9 rounded-full">
                        <img className='rounded-full object-contain' width={53} src="nav.jpg" alt="image" />
                    </div>
                    <Link href={"/"}>
                    <h1 className='text-xl font-bold'>Zain Arshad</h1>
                    </Link>
                </div>
                <ul className=' hidden sm:flex gap-8 items-center justify-center cursor-pointer'>
                    <Link className={` ${pathname === "/" ? "bg-purple-950 text-white p-4 rounded-sm" : "text-gray-300  hover:text-white"}`} rel="stylesheet" href="/" ><li>Home</li></Link>
                    <Link className={` ${pathname === "/about" ? "bg-purple-950 text-white p-4 rounded-sm" : "text-gray-300 hover:text-white"}`} rel="stylesheet" href="/about" ><li>About me</li></Link>
                    <Link className={` ${pathname === "/skills" ? "bg-purple-950 text-white p-4 rounded-sm" : "text-gray-300  hover:text-white"}`} rel="stylesheet" href="/skills" ><li>SKills</li></Link>
                    <Link className={` ${pathname === "/","/about","/skills","/contact" ? " bg-gray-800 rounded-3xl text-sm p-3 hover:p-4 transition-all duration-500 ease-in-out  text-white" : "text-gray-300  hover:text-white"}`} rel="stylesheet" href="/contact" ><li>Contact me</li></Link>
                </ul>

                <div onClick={() => setIsOpen(!isOpen)} className="hamburger sm:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#686868" fill="none">
                        <path d="M4 5L16 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M4 19L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: isOpen ? 0 : "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="fixed top-0 right-0 w-screen h-full p-6 "
                    >
                        <div className="sidebar w-screen h-45 fixed top-16 right-0">
                            {/* Sidebar content goes here */}
                            <ul className='flex flex-col bg-black  rounded-lg  items-center justify-center cursor-pointer'>
                                <div className="h-12 w-full flex justify-center items-center border-b-2 border-gray-700">
                                    <Link className={` ${pathname === "/" ? "bg-purple-950 text-white p-2 w-full text-center mb-2 rounded-sm" : "text-gray-300 hover: hover:text-white"}`} rel="stylesheet" href="/" ><li>Home</li></Link>
                                </div>
                                <div className="h-12 w-full flex justify-center items-center border-b-2  border-gray-700">
                                    <Link className={` ${pathname === "/about" ? "bg-purple-950 flex justify-center items-center text-white p-2 w-full text-center mb-2 rounded-sm" : "text-gray-300 hover: hover:text-white"}`} rel="stylesheet" href="/about" ><li>About me</li></Link>
                                </div>
                                <div className="h-12 w-full flex justify-center items-center border-b-2 border-gray-700">
                                    <Link className={` ${pathname === "/skills" ? "bg-purple-950 text-white p-2 w-full text-center mb-2 rounded-sm" : "text-gray-300 hover:hover:text-white"}`} rel="stylesheet" href="/skills" ><li>SKills</li></Link>
                                </div>
                                <div className="h-12 w-full flex justify-center items-center border-b-2 border-black">
                                    <Link className={` ${pathname === "/contact" ? "bg-purple-950 text-white p-2 w-full text-center mb-2 rounded-sm" : "text-gray-300 hover:hover:text-white"}`} rel="stylesheet" href="/contact" ><li>Contact me</li></Link>
                                </div>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
