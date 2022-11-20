import React from "react";

const Container9 = () => {
  return (
    <div className="container9">
      <img src="/footerbg.svg" alt="gnb" className="bg" />
      <div className="content">
        <div className="left">
          <img src="/navlogo.svg" alt="navlogo" />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <p>Subscribe</p>
          <div>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="draw">
        <ul>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
          <li>
            <a href="/">Cookies Settings</a>
          </li>
        </ul>
        <p className="xxx">2022 SIMSEKFURKANN07. All right reserved.</p>
      </div>
    </div>
  );
};

export default Container9;
