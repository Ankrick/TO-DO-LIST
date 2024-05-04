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
  let [category, setCategory] = useState([]);
  let [loading, setLoading] = useState(true);
  let [todos, setTodos] = useState([]);
  let [hover, setHover] = useState({});

  let onDeleted = (id) => {
    setTodos(prev => prev.filter(todo => todo._id !== id))
  }

  let handleHover = (categoryId, isHovering) => {
    setHover(prevState => ({
      ...prevState,
      [categoryId]: isHovering
    }));
  };

  useEffect(()=>{
    let fetchCategory = async () => {
      let response = await axios.get('http://localhost:3000/category/'+user)
      let data = await response.data;
      setCategory(data);
      setLoading(false);
    }
  fetchCategory();
  }, [page])

  useEffect(()=>{
    let fetchTodos = async () => {
      let response = await axios.get('http://localhost:3000/todo/'+user)
      let data = await response.data;
      setTodos(data);
      setLoading(false);
    }
  fetchTodos();
  }, [page])


  if (!!todos.length){
    return (
      <>
        <div className="flex">
          {category.map(cat => (<div onPointerEnter={() => handleHover(cat._id, true)} onPointerLeave={() => handleHover(cat._id, false)} key={cat._id} className='w-full max-w-md ml-10 p-12 space-y-6'>
            <div className="justify-between item-center flex p-2">
              <span className='mt-1 border-gray-500 border-2 p-1.5 rounded-md text-sm font-medium'>{cat.category}</span>
              {!!hover[cat._id] && (<motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }}>
                <div className='text-gray-500 flex space-x-4'>
                  <button>
                    <BsThreeDots className='mt-4'/>
                  </button>
                  <Link to={`/todo/$`}>
                    <IoAddSharp className='mt-3 size-6'/>
                  </Link>
                </div>
              </motion.div>)}
              {!hover[cat._id] && (<motion.div initial={{ opacity: 1, scale: 1 }} animate={{ opacity: 0, scale: 1 }}>
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
          </div>))}
        </div>
      </>
    )
  }else{
    return (
      <>
        {loading ? (<p className='mt-8 text-center'>loading...</p>) : (<div className='mx-auto mt-4 flex flex-col space-y-10'>
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
        </div>)}
      </>
    )
  }
}
