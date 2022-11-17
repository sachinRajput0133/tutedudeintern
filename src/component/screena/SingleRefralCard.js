
import React from 'react'
import "./SingleRefralCard.css"

const CoursesCard=({title})=>{
    return (
    

      <div className="course-singlecard">
        <h1>{title}</h1>
      </div>
           
       
    )
}



const SingleRefralCard = ({heading,date,course,card }) => {
  return (
    <div className='SingleRefralCard-container' card={card}
    >
        <div className="container-box1">
            <h1>{heading}</h1>
            <p>{date}</p>
        </div>
         
        <div className="container-box2">
                 <h1>{course}</h1>
        <div className='courses-container' >
            <CoursesCard title="UI/UX" />
            <CoursesCard title="Photoshop" />
            <CoursesCard title="Illustrator" />
            <CoursesCard title="Python" />
            <CoursesCard title="MERN" />
            <CoursesCard title="Java" />
                 </div>
        </div>
        <div className="container-box3">
             <h2>Referral Amount</h2>   
             <p>₹185</p>    
        </div>
        

    </div>
  )
}

export default SingleRefralCard