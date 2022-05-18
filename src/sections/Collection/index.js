import React from "react";

import OwlCarousel from "react-owl-carousel";

import img1 from "images/collection-img-1.jpg";
import img2 from "images/collection-img-2.jpg";
import img3 from "images/collection-img-3.jpg";
import img4 from "images/collection-img-4.jpg";

const Collection = ({}) => {
  return (
    <div class="collection-sec" id="Section2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title">
              <h1>Collection of Kandi Kids</h1>
            </div>

            <div class="collection-main">
              <OwlCarousel
                loop
                responsiveClass={true}
                responsive={{
                  0:{ items:1, },
                  400:{ items:1, },
                  600:{ items:2, },
                  800:{ items:3, },
                  1000:{ items:4, }
                }}
                autoplay
                autoplayTimeout={1500}
                items={4}
                class="owl-carousel owl-theme"
                id="collection-slide"
              >
                <div class="item">
                  <div class="collection-kid-main">
                    <div class="collection-kid-img">
                      <a href="#">
                        <img src={img1} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="collection-kid-main">
                    <div class="collection-kid-img">
                      <a href="#">
                        <img src={img2} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="collection-kid-main">
                    <div class="collection-kid-img">
                      <a href="#">
                        <img src={img3} alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="collection-kid-main">
                    <div class="collection-kid-img">
                      <a href="#">
                        <img src={img4} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;


/*
<div>

          <div class='container-fluid' >

           <div className="row title" style={{marginBottom: "20px"}} >

           <div class="col-sm-12 btn btn-info">

           Owl Carousel In React Application

           </div>

           </div>

       </div>

       <div class='container-fluid' >

        <OwlCarousel items={3}

          className="owl-theme"

          loop

          nav

          margin={8} >

           <div ><img  className="img" src= {img1}/></div>

           <div><img  className="img" src= {img1}/></div>

           <div><img  className="img" src= {img1}/></div>

           <div><img  className="img" src= {img1}/></div>

           <div><img className="img" src= {img1}/></div>

           <div><img className="img" src= {img1}/></div>

           <div><img className="img" src= {img1}/></div>

      </OwlCarousel>

      </div>



      </div>*/
