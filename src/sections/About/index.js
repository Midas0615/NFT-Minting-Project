import React from "react";
import icon1 from "images/ab-icon-1.png";
import icon2 from "images/ab-icon-2.png";
import icon3 from "images/ab-icon-3.png";
import icon4 from "images/ab-icon-4.png";

import img1 from "images/ab-img-1.jpg";
import img2 from "images/ab-img-2.jpg";
import img3 from "images/ab-img-3.jpg";
import img4 from "images/ab-img-4.jpg";

const About = ({}) => {
  return (
    <div class="about-sec" id="Section3">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="title">
              <h1>About the Kandi Kids</h1>
            </div>

            <div class="row">
              <div class="col-lg-6 order-last">
                <div class="ab-img">
                  <img src={img1} alt="" />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="ab-info ab-rg">
                  <div class="about-txt-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h2>What are the Kandi Kids? </h2>
                  <p>
                    That’s so PLUR! You can catch any of the 10,000 Kandi Kids
                    at the nearest Rave! They spend their time using pony beads
                    and elastic string to create all sorts of accessories. From
                    bracelets to perlers, or necklaces to anklets, you never
                    know how your Kandi Kid will be accessorized.
                    <br />
                    <br />
                    Collect as many as you can to build out your Rave Fam!
                  </p>
                </div>
              </div>
            </div>

            <div class="row mtp-sixty">
              <div class="col-lg-6">
                <div class="ab-img">
                  <img src={img2} alt="" />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="ab-info ab-lf">
                  <div class="about-txt-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h2>Early Adopters & Raffles</h2>
                  <p>
                    A set amount of Kandi Kids will be given away via Early
                    Adopters & raffles. In Addition we will hold future airdrops
                    of new collections to addresses that have built the best
                    Rave Fams! The bigger your Rave Fam the better the chance
                    you have for surprises.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div class="row mtp-sixty">
              <div class="col-lg-6 order-last">
                <div class="ab-img">
                  <img src={img3} alt="" />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="ab-info ab-rg">
                  <div class="about-txt-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h2>Traits</h2>
                  <p>
                    All Kandi Kids were hand drawn with over 400+ accessories
                    and will be stored on the Ethereum blockchain as standard
                    ERC-271 NFT Collection. Each Kid has several different
                    traits from their hats, glasses, masks, clothing, & and of
                    course their KANDI! Many variations will exist in different
                    rarity classes.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div class="row mtp-sixty">
              <div class="col-lg-6">
                <div class="ab-img">
                  <img src={img4} alt="" />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="ab-info ab-lf">
                  <div class="about-txt-icon">
                    <img src={icon4} alt="" />
                  </div>
                  <h2>Pricing</h2>
                  <p>
                    Each of the 10,000 Kandi Kids will be available for mint for
                    just .09 ETH. Once minted, the Kandi Kids will live on the
                    OpenSea platform to join their owners and build the Rave
                    Fams.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
