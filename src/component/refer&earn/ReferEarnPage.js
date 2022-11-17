import React from "react";
import { Link } from "react-router-dom";
import "./ReferEarnPage.css";
import WorkCard from "./WorkCard";
import FriendImg from "../images/InviteFriends.svg"
import InviteImg from "../images/InviteFriends.svg"
import RefralImg from "../images/work3.svg"
import GetImg from "../images/work4.svg"
import TransferImg from "../images/work5.svg"
const ReferEarnPage = () => {
  const heading1 = "Invite your Friends";
  const description1 = "Share the link tutedude.com with your friends ";
  const heading2 = "Friend purchases any course";
  const description2 = "Using your REFERRAL CODE in the payments page ";
  const heading3 = "You get ₹ 200 as referral money";
  const description3 = "On total purchase the friend makes, into your wallet ";
  const heading4 = "Your Friend gets ₹ 200 Off";
  const description4 =
    "On his overall fee on successful purchase using your referral code  ";
  const heading5 = "Transfer money from wallet";
  const description5 =
    "When the wallet balance reaches ₹200 or more, you can withdraw it";

  return (
    <div className="referearn-container">
      {/* box1 */}
      <div className="referearn-container-box1">
        <p className="referearn-container-box1-text">
          UI/UX {">"}
          <Link to={"/tutedudeintern/referearn"}>Refer & Earn</Link>
        </p>
      </div>
      <div className="referearn-container-dashboard">
        <div className="dashbard-text-wapper">
          <div>
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
      <div className="referearn-container-refrelcode">
        <h1>Your Referral Code </h1>
        <div>
          <h2>EDCH54</h2>
        </div>
      </div>
      <div className="referearn-container-howitworks">
        <h1>How does it work ?</h1>

        <div className="howitworks-card">
          <WorkCard
            image={InviteImg}
            heading={heading1}
            description={description1}
          />

          <WorkCard
            image={FriendImg}
            heading={heading2}
            description={description2}
          />
          <WorkCard
            image={RefralImg}
            heading={heading3}
            description={description3}
          />
          <WorkCard
            image={GetImg}
            heading={heading4}
            description={description4}
          />
          <WorkCard
            image="../images/work5.svg"
            heading={heading5}
            description={description5}
          />
        </div>
      </div>
      <div className="referearn-container-footertext">
        <h1>Friends Who Enrolled</h1>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default ReferEarnPage;
