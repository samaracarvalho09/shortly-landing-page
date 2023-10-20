import "./style.scss";

import React from "react";
import imageHome from "../../assets/illustration-working.svg";
import imageForm from "../../assets/bg-shorten-desktop.svg";

export default function Home() {
  return (
    <div className="wrapper-home">
      <div className="container-text-image-home">
        <div className="home-text">
          <h1>More than just shorter links</h1>
          <p className="home-paragraph">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.{" "}
          </p>
          <button>Get Started</button>
        </div>
        <div><img src={imageHome} className="home-image" /></div>
      </div>

     
    </div>
  );
}
