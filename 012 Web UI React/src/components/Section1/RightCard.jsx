import React from 'react'
import { ArrowRight } from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' shrink-0 h-full w-1/3 rounded-4xl overflow-hidden bg-red-400 relative'>
        <img className='w-full h-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} intro={props.intro}/>
    </div>
  )
}

export default RightCard