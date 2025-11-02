import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='p-7 absolute top-0 left-0 h-full w-full flex flex-col justify-between'>
            <h2 className='flex h-10 w-10 rounded-full justify-center items-center text-2xl font-bold bg-white'>{props.id + 1}</h2>
            <div className='flex flex-col gap-5 text-lg/5 font-medium text-white line-height'>
                <p>{props.intro}</p>
                <div className='flex items-center justify-between'>
                    <button className='text-white bg-blue-700 px-5 py-2 rounded-full text-lg'>{props.tag}</button>
                    <button><ArrowRight size={30} color="#fff" className='bg-blue-700 w-10 h-10 rounded-full'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent