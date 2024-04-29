import React, { useEffect, useState } from 'react'
import TodoCard from '../components/TodoCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IoAddSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { motion } from 'framer-motion';



export default function Home() {

  let searchQuery = new URLSearchParams(location.search)
  let page = searchQuery.get('page');
  let user = "Ankrick" //replace w fetch user later
  let [todos, setTodos] = useState([]);
  let [hover, setHover] = useState(false);

  let onDeleted = (id) => {
    setTodos(prev => prev.filter(todo => todo._id !== id))
  }

  useEffect(()=>{
    let fetchTodos = async () => {
      let response = await axios.get('http://localhost:3000/todo/'+user)
      let data = await response.data;
      setTodos(data);
    }
  fetchTodos();
  }, [page])


  if (!!todos.length){
    return (
      <>
        <div onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)} className='w-full max-w-md ml-10 p-12 space-y-6'>
          <div className="justify-between item-center flex p-2">
            <span className='mt-1 border-gray-500 border-2 p-1.5 rounded-md text-sm font-medium'>Daily Tasks</span>
            {!!hover && (<motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }}>
              <div className='text-gray-500 flex space-x-4'>
                <button>
                  <BsThreeDots className='mt-4'/>
                </button>
                <Link to='/todo'>
                  <IoAddSharp className='mt-3 size-6'/>
                </Link>
              </div>
            </motion.div>)}
            {!hover && (<motion.div initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 0, scale: 1 }}>
              <div className='text-gray-500 flex space-x-4'>
                <BsThreeDots className='mt-4'/>
                <IoAddSharp className='mt-3 size-6'/>
              </div>
            </motion.div>)}
          </div>
            {todos.map(todo => (
                <TodoCard todo={todo} onDeleted={onDeleted}/>
            )                       
            )}
        </div>
      </>
    )
  }else{
    return (
      <>
        <div className='mx-auto mt-4 flex flex-col space-y-10'>
          <div className='text-center mt-36 text-6xl'>
            <div>Organize your</div>
            <p>work and life, finally.</p>
          </div>
          <div className='text-center text-lg'>
            <p>Become organized, and calm with</p>
            <p>todo app. The World's #1 task manager app</p>
          </div>
          <div className="text-center">
            <Link to='/todo' className='p-3 text-center text-white font-bold rounded-xl bg-red-500 hover:bg-red-700'>Add Task</Link>
          </div>
        </div>
      </>
    )
  }
}
