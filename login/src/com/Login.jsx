import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='bg-gradient-to-tr from-purple-600 h-screen items-center'>

<div className='flex justify-center'>
    <div className='w-[300px] h-[300px] bg-gray-600 text-white border-2 gray-500 mt-20 shadow-xl shadow-white'>
<div>
    <div className='p-4 text-center'>
        <label className='mr-40'>Email</label><br></br>
    <input type='text' placeholder='Enter your email ' className='p-2 w-full rounded py-2 outline-none cursor-pointer'/><br></br>
<label className='mr-40'>Name</label><br></br>
        <input type='text' placeholder='Enter your password 'className='p-2 w-full mt-2 rounded py-2 outline-none cursor-pointer'/>
    <button className='bg-green-600 px-8 rounded-lg  py-3 mt-10 text-white'>Login</button>
  <p>if you dont have Account?<span  className='text-blue-400 cursor-pointer'>Signup</span></p>
    </div>
</div>
    </div>
</div>
        </div>
    </div>
  )
}
