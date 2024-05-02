import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { IoTrashBin } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";



export default function TodoCard({todo, onDeleted}) {

  let Delete = async(id) => {
    try{
      await axios.delete('http://localhost:3000/todo/'+id);
      onDeleted(todo._id);
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg border border-md space-y-3">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-red-500">{todo.title}</h3>
              <div className='flex space-x-3'>
                <div className='border border-gray-400 rounded-md px-2'>{todo.category}</div>
                <Link to={`/edit/`+todo._id} className='mt-1.5 hover:text-red-500 rounded-lg text-sm'><FaRegEdit className='size-4'/></Link>
                <button onClick={() => Delete(todo._id)} className='mt-0.5 hover:text-red-500 rounded-lg text-sm'><IoTrashBin className='size-4'/></button>
              </div>
            </div>
            <p>{todo.body}</p>
        </div>
  )
}
