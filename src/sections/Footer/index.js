import React from 'react';
import twitter from 'images/twitter.svg'
import instagram from 'images/instagram.svg'
// import rarity from 'images/rarity.png'

import { HashLink } from 'react-router-hash-link';

const Footer = ({}) => {
  return (
    <div class="footer">
    <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <ul class="f-social">
          <li><a href="#"><img src={twitter} alt=""/></a></li>
          <li><a href="#"><img src={instagram} alt=""/></a></li>
          {/* <li><a href="#"><img src={rarity} alt=""/></a></li> */}
        </ul>

        <ul class="f-menu">
          <li><HashLink to="#Section1" smooth>Start</HashLink>|</li>
          <li><HashLink to="#Section2" smooth>Collection</HashLink>|</li>
          <li><HashLink to="#Section3" smooth>About Us</HashLink>|</li>
          <li><HashLink to="#Section4" smooth>Road Map</HashLink>|</li>
          <li><HashLink to="#Section5" smooth>Faqs</HashLink></li>
        </ul>

        <p>&copy; 2021 All Rights Reserved.</p>

      </div>
    </div>
    </div>
  </div>
  );
}

export default Footer;
