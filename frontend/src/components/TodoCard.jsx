import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

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
              <div className='space-x-3'>
                <Link to={`/edit/`+todo._id} className='bg-yellow-300 px-2 py-1 rounded-lg text-sm'>Edit</Link>
                <button onClick={() => Delete(todo._id)} className='bg-red-500 px-2 py-1 rounded-lg text-white text-sm'>Delete</button>
              </div>
            </div>
            <p>{todo.body}</p>
        </div>
  )
}
