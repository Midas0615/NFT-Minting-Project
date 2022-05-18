import React from "react";
import logo from "images/logo.png";
import twitter from "images/twitter.svg";
import instagram from "images/instagram.svg";
// import rarity from "images/rarity.png";
import discord from "images/discord.png";
import opensea from "images/opensea.png";

import { HashLink } from "react-router-hash-link";

const Header = () => {
  const handleClick = (event) => {
    document.getElementById("mySidenav").classList.remove("menu_show");
    document.getElementById("change").classList.remove("change");
  };
  return (
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <HashLink to="#Section1" smooth class="logo">
              <img src={logo} alt="" />
            </HashLink>
            <div class="h-main">
              <div class="mobile-menu" id="change">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
              <div class="social">
                <ul>
                  <li>
                    {" "}
                    <a href="http://twitter.com/kandikidsNFT" target="_blank">
                      {" "}
                      <img src={twitter} alt="Twitter" />{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://instagram.com/kandikidsNFT"
                      target="_blank"
                    >
                      {" "}
                      <img src={instagram} alt="Instagram" />{" "}
                    </a>{" "}
                  </li>
                  {/* <li> <a href="#"> <img src={rarity} alt="Rarity" /> </a> </li> */}
                </ul>
              </div>

              <div class="h-open-dis">
                <a
                  class="h-btn"
                  href="https://discord.com/invite/Mawtnty3"
                  target="_blank"
                >
                  {" "}
                  <img src={discord} alt="" /> <span>Discord</span>{" "}
                </a>
                <a
                  class="h-btn"
                  href="https://opensea.io/collection/kandi-kids/"
                >
                  {" "}
                  <img src={opensea} alt="" /> <span>Opensea</span>{" "}
                </a>
              </div>

              <div class="navigation" id="mySidenav">
                <a
                  href="javascript:void(0)"
                  class="closebtn"
                  onclick="closeNav()"
                >
                  {" "}
                  &times;{" "}
                </a>
                <ul>
                  <li onClick={handleClick}>
                    {" "}
                    <HashLink to="#Section1" smooth>
                      {" "}
                      Start{" "}
                    </HashLink>{" "}
                  </li>
                  <li onClick={handleClick}>
                    {" "}
                    <HashLink to="#Section2" smooth>
                      {" "}
                      Collection{" "}
                    </HashLink>{" "}
                  </li>
                  <li onClick={handleClick}>
                    {" "}
                    <HashLink to="#Section3" smooth>
                      {" "}
                      About Us{" "}
                    </HashLink>{" "}
                  </li>
                  <li onClick={handleClick}>
                    {" "}
                    <HashLink to="#Section4" smooth>
                      {" "}
                      Road Map{" "}
                    </HashLink>{" "}
                  </li>
                  <li onClick={handleClick}>
                    {" "}
                    <HashLink to="#Section5" smooth>
                      {" "}
                      Faqs{" "}
                    </HashLink>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
