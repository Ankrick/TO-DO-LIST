import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import CategoryDrop from '../components/CategoryDrop'

export default function Todo() {
let name = 'Ankrick' //fetch from API later
let [title, setTitle] = useState('');
let [body, setBody] = useState('');
let [category, setCategory] = useState([]);
let [selectedCategory, setSelectedCategory] = useState('');
let [loading, setLoading] = useState(true);
let navigate = useNavigate();
let searchQuery = new URLSearchParams(location.search)
let page = searchQuery.get('page');

let submit = async (e) => {
  try{
    e.preventDefault();
    let todo = {
      title,
      body,
      category: selectedCategory
    };
    let res;
    res = await axios.post('http://localhost:3000/todo/'+name, todo);
    console.log(res.status);
    if(res.status === 200){
      navigate('/')
    }
    console.log(res);
  }catch(err){
    console.log(err.response.data.errors)
  }
}

const handleCategoryChange = (selected) => {
  setSelectedCategory(selected);
}

useEffect(()=>{
  let fetchCategory = async () => {
    let response = await axios.get('http://localhost:3000/category/'+name)
    let data = await response.data;
    setCategory(data);
    setLoading(false);
  }
fetchCategory();
}, [page])

  return (
    <form className='mx-auto mt-14 max-w-md border-white p-4 bg-white p-5 shadow-lg flex flex-col space-y-3 rounded-2xl' onSubmit={submit}>
          <input value={title} onChange={e => setTitle(e.target.value)} className='py-3 ml-6 text-xl' type="text" placeholder='Title'></input>
          {loading ? (<p className='ml-6'>Loading...</p>) : (<div className="ml-4"><CategoryDrop category={category} onCategoryChange={handleCategoryChange}/></div>)}
          <textarea value={body} onChange={e => setBody(e.target.value)} className='py-3 ml-6' type="text" placeholder='body'></textarea>
          <button onClick={submit} className='mx-auto text-center w-full max-w-20 text-white font-bold rounded-lg bg-red-500'>Add</button>
    </form>
  )
}
