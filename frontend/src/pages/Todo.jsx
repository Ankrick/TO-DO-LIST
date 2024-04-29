import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Todo() {
let name = 'Ankrick' //fetch from API later
let [title, setTitle] = useState('');
let [body, setBody] = useState('');
let navigate = useNavigate();
let submit = async (e) => {
  try{
    e.preventDefault();
    let todo = {
      email: 'tn8070250@gmail.com',
      title,
      body
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

  return (
    <form className='mx-auto mt-14 max-w-md border-white p-4 bg-white p-5 shadow-lg flex flex-col space-y-3 rounded-2xl' onSubmit={submit}>
          <input value={title} onChange={e => setTitle(e.target.value)} className='py-3 text-center' type="text" placeholder='title'></input>
          <textarea value={body} onChange={e => setBody(e.target.value)} className='py-3 text-center' type="text" placeholder='body'></textarea>
          <button onClick={submit} className='mx-auto text-center w-full max-w-20 text-white font-bold rounded-lg bg-red-500'>Add</button>
    </form>
  )
}
