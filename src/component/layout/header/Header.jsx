import React from 'react'
import "./Header.css"
import ProfileImg from "../../images/Vectorarrow.png"

const Header = () => {
  return (
    <header  className='header' >
         <div className='navbar-container'  >
             <div className='navbar-box1' >
                  <div className='navbar-box1-logo' 
                  >
                    

                  </div>
                      
             </div>
              <div className='navbar-box2'>
                <h2 className='navbar-box2-myassignment'  >My Assignment</h2>
                <h2  className='navbar-box2-chatwithmentor'   >Chat with Mentor</h2>
                <div  className='navbar-box2-profilename-container'  >
                  <img    src="/images/vector.png" alt="" />
                  <h2 className='navbar-box2-profilename' >ProfileName</h2>
                  <img src={ProfileImg} alt="Profile" />

                </div>
              </div>

         </div>

    </header>
  )
}

export default Header