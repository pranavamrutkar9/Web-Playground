import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {

    
  return (
    <div>
      <div className="card">

        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark /></button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.daysPosted} days ago</span></h3>
          <h2>{props.post}</h2>
          <div>
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
