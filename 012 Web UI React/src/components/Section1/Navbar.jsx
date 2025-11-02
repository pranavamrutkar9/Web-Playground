import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-20'>
        <h4 className='bg-black py-3 px-6 text-white rounded-full uppercase'>Target Audience</h4>
        <button className='px-5 py-2 bg-gray-200 rounded-full tracking-widest text-sm uppercase'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar