import React from "react";
import "./style.scss";

export default function Cards() {
  return (
    <div className="wrapper-gray-bg">
      <form className="container-input">
        <input
          type="text"
          name=""
          id=""
          placeholder="Shorten a link here... "
          required
        />
        <button type="submit" className="shortenIt-button">
          Shorten It!
        </button>
      </form>
      <div className="url-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="https://www.testeteste.com"
        />
        <div className="container-copy-link">
          <span>https://relspa/ska8a21</span>
          <button className="copy-button">Copy</button>
        </div>
      </div>
      <div className="cards-container">
        <div className="title-cards">
          <h3> Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
