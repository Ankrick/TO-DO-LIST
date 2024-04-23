import React from 'react'

export default function Home() {
  return (
    <>
      <div className='mt-10 flex flex-row justify-center items-center'>
        <div className='bg-white shadow-lg rounded-lg w-40 text-center'>
          <input className='py-3 text-center' type="text" placeholder='title'></input>
          <input className='py-3 text-center' type="text" placeholder='body'></input>
        </div>
      </div>
    </>
  )
}
