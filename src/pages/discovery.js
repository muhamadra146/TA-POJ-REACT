import React from 'react'
import Group22 from '../asset/gambar/dicovery/Group 22.png'
import Groupimg1 from '../asset/gambar/dicovery/Group 10.png'
import Groupimg2 from '../asset/gambar/dicovery/Group 10 (1).png'
import MostPick from '../components/MostPick/MostPick'
import OurPackage from '../components/OurPackage/OurPackage'
import Discount from '../components/discount/Discount'
import Footer from '../components/Footer/Footer'
// import JsQuery from '../asset/js/index'

function discovery() {
  return (
    <>
        {/* SECTION TOP START */}
        <div class="section-top">
          <div class="container">
              <div class="content1">
                  <div class="content-left">
                      <h1>Exploring Wonderful Indonesia</h1>
                      <p>At Wonderful Indonesia, we believe that travel should be an unforgettable experience, and we're dedicated to making sure that every moment you spend with us is one to remember. So why wait? Book your adventure today and discover the magic of Indonesia.</p>
                      <button>Explore Now <i class="fa-regular fa-circle-right"></i></button>
                  </div>
                  <div class="content-right">
                      <div class="border">
                          <img src={Group22} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        {/* SECTION TOP END */}
        <br/>
        <br/>
        <br/>
        {/* MOST POPULAR START */}
        <MostPick/>
        {/* SECTION MOST END */}

        {/* SECTION BEST EARLY START*/}
        <div class="section-best-early">
          <div class="container">
              <div class="content1">
                  <div class="content-left">
                      <h1><span>The Best Early</span> <br/> Travel Experience</h1>
                      <p>We offer a wide range of services and have many choices of travel packages to accompany your trip. In addition, we also uphold corporate values.</p>
                  </div>
                  <div class="content-right">
                      <div class="col1">
                          <div class="card">
                              <p><span><i class="fa-solid fa-heart"></i> Our Ethics</span></p>
                              <p>Prioritizing Happy Traveling, Upholding Culture</p>
                          </div>
                      </div>
                      <div class="col2">
                          <div class="card">
                              <p><span><img src={Groupimg1} alt=""/> Our Ethics</span></p>
                              <p>Prioritizing Happy Traveling, Upholding Culture</p>
                          </div>
                          <div class="card">
                              <p><span><img src={Groupimg2} alt=""/> Our Ethics</span></p>
                              <p>Prioritizing Happy Traveling, Upholding Culture</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        {/* SECTION BEST EARLY END*/}

        {/* SECTION OUR PACKAGE START */}
        <OurPackage/>
        {/* SECTION OUR PACKAGE END */}
        <br/>
        <br/>
        <br/>
        <br/>
        {/* DISCOUNT START */}
        <Discount/>
        {/* DISCOUNT END */}
      
        {/* footer start */}
        <Footer/>
        {/* footer end */}

        {/* <JsQuery/> */}
    </>
  )
}

export default discovery
