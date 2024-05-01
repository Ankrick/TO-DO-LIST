import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import {useRef} from "react"

export default function CategoryDrop({category}) {

  let [isOpen, setIsOpen] = useState(false);
  const catMenu = useRef(null)
  const closeOpenMenus = (e)=>{
    if(isOpen && !catMenu.current?.contains(e.target)){
      setIsOpen(false)
    }}
    console.log(category[0].category)


  document.addEventListener('mousedown',closeOpenMenus)

  return (
    <div className='border max-w-48' ref={catMenu}>
      <button onClick={() => setIsOpen((prev)=> !prev)}>{category[0].category}</button>
      {!!isOpen && (
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className='mt-0 w-48 bg-white rounded-lg flex flex-col py-2 shadow-lg'>
                      {category.map(cat => (
                            <button className='px-4 text-sm hover:bg-gray-400 hover:text-white flex space-x-4'>{cat.category}</button>
                          )                       
                      )}
                    </div>
                </motion.div>
            )}
    </div>
  )
}


