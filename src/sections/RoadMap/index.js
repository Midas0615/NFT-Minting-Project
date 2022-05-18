import React from "react";
import icon1 from "images/road-icon-1.png";
import icon2 from "images/road-icon-2.png";
import icon3 from "images/road-icon-3.png";
import icon4 from "images/road-icon-4.png";
import icon5 from "images/road-icon-5.png";
import icon6 from "images/road-icon-6.png";

const RoadMap = ({}) => {
  return (
    <div class="road-map-sec" id="Section4">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="title">
              <h1>Road Map</h1>
            </div>

            <div
              style={{
                color: "#fff",
                marginBottom: "48px",
                whiteSpace: "pre-wrap",
                // textAlign: "center",
              }}
            >
              <p>
                Owning a Kandi Kid is your private individualized token that
                unlocks a whole new world of private &amp; exclusive experiences
                in the Electronic music world.
              </p>
              <br />
              <p>
                Experiences may include: <br />
                - Exclusive Parties in your city <br />
                - Private Experiences during/at Major Festivals <br />
                - Intimate interactions with your Favorite Electronic Artist{" "}
                <br />
              </p>
            </div>

            <section id="cd-timeline" class="cd-container">
              <div class="tp-circle"></div>
              <div class="cd-timeline-block">
                <div class="cd-timeline-img" style={{ background: "#ff0000" }}>
                  <img src={icon1} alt="#" />
                </div>

                <div class="cd-timeline-content wow fadeInUp">
                  <h2>25%</h2>
                  <p>
                    We avoid a Fyre Festival catastrophic Repeat & we will
                    airdrop 10 Kandi Kids to lucky holders.{" "}
                  </p>
                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img" style={{ background: "#0db200" }}>
                  <img src={icon2} alt="#" />
                </div>

                <div class="cd-timeline-content">
                  <h2>50%</h2>
                  <p>
                    We are getting close but the Artist’s still aren’t getting
                    paid & we will airdrop 10 Kandi Kids to lucky holders.
                  </p>
                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img" style={{ background: "#00caef" }}>
                  <img src={icon3} alt="#" />
                </div>

                <div class="cd-timeline-content">
                  <h2>75%</h2>
                  <p>
                    Rarity Sniper - the Kandi Kids Collection will be submitted
                    for Rarity rankings.
                  </p>
                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img" style={{ background: "#ff00d8" }}>
                  <img src={icon4} alt="#" />
                </div>

                <div class="cd-timeline-content">
                  <h2>100%</h2>
                  <p>
                    The rarest Kandi Kid holders will be airdropped a free Kid
                    to join their Rave Fam.
                  </p>
                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img" style={{ background: "#000ecc" }}>
                  <img src={icon5} alt="#" />
                </div>

                <div class="cd-timeline-content">
                  <h2>All the Kids at the Rave ACHIEVED</h2>
                  <p>
                    Once 100% Mint is achieved, the team will begin building
                    their first exclusive Party for Kandi Kid Holders.
                  </p>
                </div>
              </div>

              <div class="cd-timeline-block">
                <div class="cd-timeline-img" style={{ background: "#ef6000" }}>
                  <img src={icon6} alt="#" />
                </div>

                <div class="cd-timeline-content">
                  <h2>Future Raves of 2022</h2>
                  <p>
                    We hope to continue the legacy of the Kandi Kids into the
                    future!
                  </p>
                </div>
              </div>
              <div class="btm-circle"></div>
            </section>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          position: "relative",
          margin: "40px 40px 0px",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <h3>Breakdown from Mint + Secondary Opensea Sales:</h3>
        <br />
        <p>
          25% Toward Producing Exclusive Events strictly for Kandi Kid Holders
          around the world. 25% Toward building the Kandi Kids team. The mission
          for team Kandi Kids is to produce exclusive events + activations for
          Kandi Kids holders worldwide. We plan on hosting some of the world’s
          biggest artists just for you, the holder. Imagine a world where your
          Kandi Kid is your currency. Well, you don’t have to because this is
          the world’s first NFT EDM collection that will grant you access to
          events. Stay tuned as the team is working to build a community where
          holders have option to pick the event city, the artist, and all of the
          details in between.
        </p>
      </div>
    </div>
  );
};

export default RoadMap;
