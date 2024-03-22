import React from "react";
import Footer from '../Footer'
import Twitter from "../../assets/back-twitter 1.png";
import Logo from "../../assets/twitter-logo-4 1.png";
import Google_icon from "../../assets/google-icon 1.png";
import Apple_icon from "../../assets/logo-apple 1.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="landingpage-container">
        <div className="landingpage-left">
          <img src={Twitter} alt="twitter backgraound" />
        </div>
        <div className="landingpage-right">
          <div>
            <img src={Logo} alt="twitter-logo" />
          </div>
          <h1>Happening now</h1>
          <h4>Join Twitter today</h4>
          <div className="signup-methods">
            <div className="items" onClick={()=> navigate("/signup")}>
              <img src={Google_icon} alt="google-icon" />

              <div>Sign up with Google</div>
            </div>
            <div className="items" onClick={()=> navigate("/signup")}>
              <img src={Apple_icon} alt="apple-icons" />

              <div>Sign up with Apple</div>
            </div>
            <div className="items" onClick={()=> navigate("/signup")}>
              <div>Sign up with phone or email</div>
            </div>
          </div>
          <div className="small-text">
            By signing up you agree to the <span>Terms of Service</span> and{" "}
            <span>
              Privacy <br /> Policy
            </span>
            , including <span>Cookie Use.</span>
          </div>
          <div className="small-text">
            Already have an account? <span onClick={()=> navigate("/login")}>Log in</span>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
