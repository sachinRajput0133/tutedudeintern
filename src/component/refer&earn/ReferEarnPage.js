import React from 'react'
import { Link } from 'react-router-dom'
import "./ReferEarnPage.css"
import WorkCard from './WorkCard'
const ReferEarnPage = () => {
  return (
<div  className="referearn-container" >
    {/* box1 */}
        <div className="referearn-container-box1">
          <p className="referearn-container-box1-text">
            UI/UX {">"}<Link to={"/refer&earn"} >Refer & Earn</Link> 
          </p>
        </div>
        <div className="referearn-container-dashboard">
            <div className="dashbard-text-wapper">
            <div  >
                <h1>Referral Earning</h1>
                <p>₹ 2,500</p>
            </div>
            <div>
                <h1>Total Referrals</h1>
                <p>7</p>
            </div>
            <div>
                <h1>Wallet Balance</h1>
                <p>₹ 500</p>
            </div>
            </div>
             <div className="dashboard-withdraw">
                <h2>Withdraw Balance </h2>
             </div>

        </div>
        <div className='referearn-container-refrelcode'>
              <h1>Your Referral Code </h1>
         <div>
           <h2>EDCH54</h2>
         </div>
        </div>
        <div className='referearn-container-howitworks' >
            <h1>How does it work ?</h1>
            <div  className='howitworks-card' >
                   <WorkCard image="/images/InviteFriends.svg" />
                   <WorkCard image="/images/work@2x.svg"  />
                   <WorkCard  image="/images/work3.svg" />
                   <WorkCard  image="/images/work4.svg"/>
                   <WorkCard  image="/images/work5.svg"/>
                  
            </div>
             
        </div>
        <div className='referearn-container-footertext'  >

            <h1>Friends Who Enrolled</h1>
            <p>Terms & Conditions</p>
        </div>
       


 </div>
        
        





  
  )
}

export default ReferEarnPage