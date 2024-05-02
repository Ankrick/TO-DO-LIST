import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import {useRef} from "react"

export default function CategoryDrop({category, onCategoryChange}) {

  let [isOpen, setIsOpen] = useState(false);
  let [selected, setSelected] = useState(category[0].category);
  const catMenu = useRef(null)
  const closeOpenMenus = (e)=>{
    if(isOpen && !catMenu.current?.contains(e.target)){
      setIsOpen(false)
    }}


  const onSelected = ({cat}) => {
    setSelected(cat.category);
    setIsOpen(false);
    onCategoryChange(cat.category);
  }


  document.addEventListener('mousedown',closeOpenMenus)

  if(!!category.length){
    return (
      <div className='flex flex-row space-x-4'>
        <p className='text-gray-500 ml-1.5 text-md'>Category</p>
        <div className='bg-red-500 rounded-lg text-center w-full max-w-20' ref={catMenu}>
          <button className='text-white text-sm font-medium' value = {selected} onClick={() => setIsOpen((prev)=> !prev)}>{selected}</button>
          {!!isOpen && (
                    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
                        <div className='absolute mt-0 w-48 bg-white rounded-lg flex flex-col py-2 shadow-lg'>
                          {category.map(cat => (
                                <button key={cat._id} onClick={()=> onSelected({cat})} className='px-4 text-sm hover:bg-gray-400 hover:text-white flex space-x-4'>{cat.category}</button>
                              )
                          )}
                        </div>
                    </motion.div>
                )}
        </div>
      </div>
    )
  }
}


