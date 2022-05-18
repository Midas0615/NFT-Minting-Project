import React from "react";

const Faqs = ({}) => {
  return (
    <div class="faqs-sec" id="Section5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="title">
              <h1>Faqs</h1>
            </div>

            <div class="faqs-main">
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Q. What are Kandi Kids?
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        That’s so PLUR! You can catch any of the 10,000 Kandi
                        Kids at the nearest Rave! They spend their time using
                        pony beads and elastic string to create all sorts of
                        accessories. From bracelets to perlers, or necklaces to
                        anklets, you never know how your Kandi Kid will be
                        accessorized.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Q. How were Kandi Kids created?{" "}
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Each Kandi Kid was drawn by hand and meticulously
                        crafted. We have made an entire collection of the best
                        accessories that reflect the current EDM culture.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Q. How much does it cost to mint?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        0.09 Eth and gas fee per transaction. Mint more than 1
                        if you want to save on gas cost!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Q. How many Kandi Kids will be created?{" "}
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        10,000 Kandi Kids will be created for the first rave!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Q. How to purchase?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        All Kandi Kids will be available for minting via our
                        website. Once the mint process is sold out, OpenSea is
                        the chosen platform for resell.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Q. Who are the team?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    class="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>The Rave Maker!</p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingSeven">
                    <h5 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Q. How do I resell my Kandi Kids?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSeven"
                    class="collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        OpenSea is the chosen platform. Just open the website
                        and connect your wallet to the OpenSea platform.{" "}
                      </p>
                    </div>
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

export default Faqs;
