import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black/10 p-3 pl-5 flex justify-between w-full items-center rounded-2xl'>
        <h1 className='text-black font-bold text-xl'>StudyGenius</h1>
        <div className='flex'>
            <div className='font-semibold text-black w-max px-4 py-2'>
                <span>About</span>
            </div>
            <div className='font-semibold cursor-pointer text-black bg-white rounded-xl w-max px-4 py-2'>
                <span>Log in</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar