import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-950 p-5 text-white  px-5 mt-10'>
      <div className="flex flex-col md:flex-row md:justify-between md:m-3">
        <div className="contact md:flex md:flex-col md:items-center text-white mb-4">
          <h2 className='font-bold text-xl underline mb-2 md:mb-3'>Contact Me</h2>
          <div className="flex gap-1">
          <span>Email: </span>
          <span> zainarshad110@gmail.com</span>
          </div>
        </div>

        <div className="quick">
          <h2 className='font-bold text-xl underline mb-2 md:mb-3'>Quick Links</h2>
          <div className="links flex flex-col md:items-center">
            <Link className='hover:underline cursor-pointer hover:text-gray-500 ' href={"/"}>Home</Link>
            <Link className='hover:underline cursor-pointer hover:text-gray-500 ' href={"/about"}>About</Link>
            <Link className='hover:underline cursor-pointer hover:text-gray-500 ' href={"/skills"}>Skills</Link>
            <Link className='hover:underline cursor-pointer hover:text-gray-500  mb-4' href={"/contact"}>Contact</Link>
          </div>
        </div>

        <div className="logos flex mb-4">
          <div className="flex flex-col md:items-center">
            <div className="font-bold text-xl underline mb-3 md:mb-5">Follow Me</div>
            <div className='flex justify-center items-center gap-2'>
              <Link href={"https://www.facebook.com/profile.php?id=100014594230031"} target="_blank">
                <img className="cursor-pointer rounded-full" width={43} src="facebook.png" alt="" />
              </Link>
              <Link href={"https://github.com/zainarshad16"} target="_blank">
                <img className="cursor-pointer" width={43} src="github.png" alt="" />
              </Link>
              <Link href={"https://www.instagram.com/zainarshad.16/?next=%2F"} target="_blank">
                <img className="cursor-pointer" width={43} src="insta.webp" alt="" />
              </Link>
              <Link href={"https://www.linkedin.com/in/zain-arshad-76155a322/"} target="_blank">
                <img className="cursor-pointer " width={43} src="linkdin.png" alt="" />
              </Link>
            </div>
          </div>
        </div>

      </div>
      <div className="text-center">
        <div className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
          <span className='text-sm text-gray-500'>CopyRight © 2025  Zain Arshad</span>
          <span className='text-gray-500'>•</span>
          <span className='text-sm text-gray-500'>All rights reserved</span>
          {/* <span>•</span>
                    <span className='text-sm text-gray-600'>Made with Zain Arshad</span> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
