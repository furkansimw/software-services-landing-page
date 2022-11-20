import React from "react";

const Container6 = () => {
  return (
    <div className="container6">
      <div className="title">
        <h1>Simple and flexible pricing</h1>
        <p>
          Start with Support and build your own custom solution or choose The
          Suite
        </p>
      </div>
      <ul className="main">
        <li>
          <p className="plan-name">Basic plan</p>
          <p className="pricing">$19/mo</p>
          <div className="or">or $199 yearly</div>
          <ul className="lll">
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Unlimited members</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Unlimited feedback</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Weekly team Feedback Friday</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Custom Kudos +9 illustration</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Team feedback history</p>
            </li>
          </ul>
          <button>Get started</button>
        </li>
        <li className="prime">
          <p className="plan-name">Business plan</p>
          <p className="pricing">$29/mo</p>
          <div className="or">or $299 yearly</div>
          <ul className="lll">
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Unlimited members</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Unlimited feedback</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Weekly team Feedback Friday</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Team feedback history</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Slack integration</p>
            </li>
          </ul>
          <button>Get started</button>
        </li>
        <li>
          <p className="plan-name">Enterprise plan</p>
          <p className="pricing">$49/mo</p>
          <div className="or">or $499 yearly</div>
          <ul className="lll">
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Unlimited members</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Unlimited feedback</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Weekly team Feedback Friday</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Team feedback history (30 items)</p>
            </li>
            <li>
              <img src="./tick.svg" alt="tick-icon" />
              <p>Personal feedback history (6 items)</p>
            </li>
          </ul>
          <button>Get started</button>
        </li>
      </ul>
    </div>
  );
};

export default Container6;
