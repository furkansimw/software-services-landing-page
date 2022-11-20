import React from "react";

const Container1 = () => {
  return (
    <div className="container1">
      <div className="bg"></div>
      <div className="header">
        <a href="/">
          <img src="./navlogo.svg" alt="navlogo" />
        </a>
        <ul>
          <li className="home">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <button>Contact Us</button>
        </ul>
      </div>
      <div className="content">
        <h1 className="title">
          Your digital business is in good hands with us!
        </h1>
        <p className="body">
          Make your work easier with an integrated ecosystem that lets all
          departments work properly together.
        </p>
        <div className="buttons">
          <button className="f">Get Started</button>
          <button className="r">
            <p>Watch Video</p>
            <img src="./vector1.svg" alt="vector1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container1;
