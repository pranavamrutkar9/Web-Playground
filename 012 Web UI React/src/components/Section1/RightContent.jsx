import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {

  return (
    <div id='right' className='h-full w-[80] flex flex-nowrap overflow-auto gap-10 p-3'>
      {props.users.map((elem, index)=>{
        return <RightCard key={index} id={index} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
    </div>
  )
}

export default RightContent