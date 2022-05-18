import React from "react";
import Particles from "react-particles-js";
import banner from "images/banner.jpg";
import { config } from "./config.js";
import Countdown from "react-countdown";

const Banner = ({ account, connectMetaMask, totalSupply, price, mint }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [isDisabled, setIsDisabled] = React.useState(true);

  const add = (_) => {
    if (quantity == 20) return;
    setQuantity(quantity + 1);
  };

  const minus = (_) => {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  };

  const renderer = ({ completed }) => {
    if (completed) {
      setIsDisabled(false);
      return "";
    } else return "";
  };

  return (
    <div class="banner" id="Section1">
      <Countdown
        date={Date.parse("11 Nov 2021 16:30:00 GMT")}
        renderer={renderer}
      />
      <Particles params={config} style={{ position: "absolute" }} />
      <img class="desktop-banner" src={banner} alt="" />
      <div class="banner-txt-main">
        <div class="banner-txt-main-b">
          <div class="banner-txt-main-c">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <div class="banner-txt">
                    <div style={{ textAlign: "center", marginBottom: "24px" }}>
                      <button
                        type="button"
                        class="btn btn-success btn-lg"
                        onClick={connectMetaMask}
                      >
                        {account
                          ? account.slice(0, 8) +
                            "..." +
                            account.slice(account.length - 5)
                          : "Connect Wallet"}
                      </button>
                    </div>
                    <h1>Build Your Rave Fam | 10:01 AM PST 11 NOV</h1>
                    <h6>
                      The Festival is Empty, Help the Kandi Kids Get Home!
                    </h6>
                    <p>Peace, Unity, Love, Respect!</p>

                    <div class="min-qty-main">
                      <div class="control">
                        <button
                          class="bttn bttn-left"
                          id="minus"
                          onClick={(_) => minus()}
                        >
                          <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        <input
                          type="number"
                          class="input"
                          id="input"
                          value={quantity}
                        />
                        <button
                          class="bttn bttn-right"
                          id="plus"
                          onClick={(_) => add()}
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </div>

                      <a
                        class="mint-now-btn"
                        href="#"
                        onClick={() => (isDisabled ? "" : mint(quantity))}
                      >
                        Mint Now
                      </a>
                      <div class="clear"></div>
                    </div>
                    <span style={{ fontSize: 24 }}>
                      Mint Price: {price} Ether
                    </span>
                    <span>
                      Please use Chrome / Firefox with metamask extension for PC
                      or metamask app for mobile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
