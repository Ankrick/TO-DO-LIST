import React, { useState } from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom"


export default function Dropdown() {

    const[isOpen, setIsOpen] = useState(false)    

  return (
    <>
        <div class="relative">
            <button className="hover:text-red-500 active:text-red-700" onClick={() => setIsOpen((prev)=> !prev)}><BsPersonCircle className="size-6"/></button>
            {!!isOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg flex flex-col py-2 shadow-lg'>
                    <Link to="/" className='px-4 py-2 hover:bg-red-700 hover:text-white'>Account settings</Link>
                    <Link to="/" className='px-4 py-2 hover:bg-red-700 hover:text-white'>Sign In</Link>
                    <Link to="/" className='px-4 py-2 hover:bg-red-700 hover:text-white'>Log Out</Link>
                </div>
            )}
        </div>
    </>
  )
}
