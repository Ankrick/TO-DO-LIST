import React, { useState } from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import {useRef} from "react"

export default function Dropdown() {

    const[isOpen, setIsOpen] = useState(false)    
    const catMenu = useRef(null)
    const closeOpenMenus = (e)=>{
        if(isOpen && !catMenu.current?.contains(e.target)){
          setIsOpen(false)
        }}

    document.addEventListener('mousedown',closeOpenMenus)


  return (
    <>
        <div className="relative"  ref={catMenu}>
            <button className="hover:text-red-500 active:text-red-700" onClick={() => setIsOpen((prev)=> !prev)}><BsPersonCircle className="size-6"/></button>
            {!!isOpen && (
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className='absolute right-0 mt-4 w-48 bg-white rounded-lg flex flex-col py-2 shadow-lg'>
                        <Link to="/" className='px-4 py-2 hover:bg-red-700 hover:text-white flex space-x-4'><IoSettingsSharp className='mt-1'/><div>Account settings</div></Link>
                        <Link to="/" className='px-4 py-2 hover:bg-red-700 hover:text-white flex space-x-4'><FaSignInAlt className='mt-1'/><div>Sign In</div></Link>
                        <Link to="/" className='px-4 py-2 hover:bg-red-700 hover:text-white flex space-x-4'><FaSignOutAlt className='mt-1'/><div>Log Out</div></Link>
                    </div>
                </motion.div>
            )}
        </div>
    </>
  )
}
