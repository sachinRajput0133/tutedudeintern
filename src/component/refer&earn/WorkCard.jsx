import React from 'react'
import "./WorkCard.css"
const WorkCard = ({image ,heading,description }) => {
  return (
 <>
 <div className="singleWorkCard-container">

    <div className="workCard-ellipse">
        <img src={image} alt="" />
    </div>
    <div  className='workCard-textbox' >
        <h1>{heading}</h1>
     <p>{description}</p>
    </div>

 </div>
 
 
 </>
  )
}

export default WorkCard;