import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ScreenA.css";
import SingleRefralCard from "./SingleRefralCard";
import backArrow from "../images/backArrow.svg"

const ScreenA = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="screena-container">
        {/* box1 */}
        <div className="screena-container-box1 ">
          <p className="screena-container-box1-text">
            UI/UX {">"} <Link to={"/tutedudeintern/referearn"} >Refer & Earn</Link>  {">"}Friends Referred{" "}
          </p>
        </div>
        {/* box for mobile view  go back */}
        <div onClick={()=> navigate("/tutedudeintern/referearn")}   className="screena-container-box-goback"  >
        <img src={backArrow} alt="" />
                 <p>go back</p>
        </div>
        {/* box2 */}
        <div className="screena-container-box2">
          {/* left refer code */}
          <div className="refral-code">
            <h2>Your Referral Code</h2>
            <div>
              <p>EDCH54</p>
            </div>
          </div>
          {/* rifght dashboard */}
          <div className="dashboard">
            <h2> Wallet Balance</h2>
            <p>₹ 500</p>
          </div>
        </div>
        {/* box3 */}
        <div className="screena-container-box3">
          <div className="screena-container-box3-heading">
            <h1> Friends who enrolled </h1>
            <span>(3)</span>
          </div>

          <div className="screena-container-box3-refrralcards-scroll">
            <div className="refralcards-container">
              <SingleRefralCard
                card="1"
                heading="Dhiraj Saxena"
                date="14 Sep, 2022"
                course="Courses Enrolled(6)"
              />
              <SingleRefralCard
                card="2"
                heading="Subhash Mishra"
                date="15 Sep, 2022"
                course="Courses Enrolled(23)"
              />
              <SingleRefralCard
                card="3"
                heading="Prafull Kumar"
                date="15 Sep, 2022"
                course="Courses Enrolled(23)"
              />
            </div>
          </div>
        </div>
     {/* box4 */}
        <div className="screena-container-box4">
          <h2>Terms & Conditions </h2>
        </div>
      </div>
    </>
  );
};

export default ScreenA;
