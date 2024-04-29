import React from 'react'
import { useParams } from 'react-router';

export default function Edit() {

    //edit frontend + backend
    
  return (
    <form className='mx-auto mt-14 max-w-md border-white p-4 bg-white p-5 shadow-lg flex flex-col space-y-3 rounded-2xl' onSubmit={submit}>
          <input value={title} onChange={e => setTitle(e.target.value)} className='py-3 text-center' type="text" placeholder='title'></input>
          <textarea value={body} onChange={e => setBody(e.target.value)} className='py-3 text-center' type="text" placeholder='body'></textarea>
          <button onClick={submit} className='mx-auto text-center w-full max-w-20 text-white font-bold rounded-lg bg-red-500'>Add</button>
    </form>
  )
}
