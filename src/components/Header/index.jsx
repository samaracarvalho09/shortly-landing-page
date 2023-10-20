import "../Header/style.scss";

import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function ShowModal() {
    // if(!showMenu) {
    //   setShowMenu(true);
    //   console.log(showMenu, 'false aqui')
    // }
    // setShowMenu(true);
    // console.log(showMenu, 'true aqui')
    setShowMenu(!showMenu);
    console.log(showMenu, "teste");
  }
  return (
    <>
      <div className="wrapper-desktop-header">
        <div className="logo-links-container">
          <img src={logo} />
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div>
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="wrapper-mobile-header">
        <div className="container-logo-menu">
          <img className="logo" src={logo} />
          <img className="menu-icon" src={menu} onClick={ShowModal} />
        </div>

        {showMenu && (
          <div className="links-modal">
            <div className="links-container">
              <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
              </ul>
            </div>
            <div className="buttons-container">
              <button className="login-button">Login</button>
              <button className="signup-button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
