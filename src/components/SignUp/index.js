import React from "react";
import Logo from "../../assets/twitter-logo-4 1.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate = useNavigate()
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 30, 14, 15, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let years = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
  ];
  return (
    <div className="signup-container">
      <div className="signup">
        <div className="logo" onClick={()=> navigate("/")}>
          <img src={Logo} alt="twitter-logo" />
        </div>
        <div className="inputs">
          <h2>Create an account</h2>
          <div>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            <input type="text" id="phone" placeholder="Phone number" />
          </div>
          <div>
            <span>Use email</span>
          </div>
        </div>
        <div>
          <h5>Date of birth</h5>
          <p>
            Facilisi sem pulvinar veit nunc, gravinda scelerisque amet nibh sit.
            Quis bibendum ante <br /> phasellus metus, magna lacinia sed augue.
            Udio enim nasdcetur leo mauris vel eget. Pretium id <br />
            ullamcorper blamdit viverra dignissim. eget tellus. Nibh mi massa in
            molestie a sit. Ellit congue.
          </p>
        </div>
        <div className="dropdown">
          <div>
            <select>
              <option>Month</option>
              {months.map((month, idx) => {
                return <option key={idx}>{month}</option>;
              })}
            </select>
          </div>
          <div>
            <select>
              <option>Day</option>
              {days.map((day, idx) => {
                return <option key={idx}>{day}</option>;
              })}
            </select>
          </div>
          <div>
            <select>
              <option>Year</option>
              {years.map((year, idx) => {
                return <option key={idx}>{year}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="btn">Next</div>
      </div>
    </div>
  );
};

export default Signup;
