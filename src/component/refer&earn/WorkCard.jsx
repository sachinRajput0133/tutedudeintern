import React from 'react'
import "./WorkCard.css"
const WorkCard = ({image}) => {
  return (
 <>
 <div className="singleWorkCard-container">

    <div className="workCard-ellipse">
        <img src={image} alt="" />
    </div>
    <div  className='workCard-textbox' >
        <h1>Invite your Friends</h1>
        <p>Share the link tutedude.com with your friends</p>
    </div>

 </div>
 
 
 </>
  )
}

export default WorkCard;