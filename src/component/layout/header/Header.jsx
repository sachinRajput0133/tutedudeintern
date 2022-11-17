import React from 'react'
import "./Header.css"
import profileImg from "../../images/ProfileImgd.svg"
const Header = () => {
  return (
    <header  className='header' >
         <div className='navbar-container'  >
             <div className='navbar-box1' >
                  <div className='navbar-box1-logo' 
                  >
                     {/* <img src={profileImg} alt="Profile" /> */}

                  </div>
                      
             </div>
              <div className='navbar-box2'>
                <h2 className='navbar-box2-myassignment'  >My Assignment</h2>
                <h2  className='navbar-box2-chatwithmentor'   >Chat with Mentor</h2>
                <div  className='navbar-box2-profilename-container'  >
                  <img    src={profileImg} alt="" />
                  <h2 className='navbar-box2-profilename' >ProfileName</h2>
                  <img src="" alt="" />

                </div>
              </div>

         </div>

    </header>
  )
}

export default Header