import React from 'react'
import Awan from '../../asset/gambar/dicovery/awan.png'

function OurPackage() {
  return (
    <>
    <div class="section-our-package">
        <div class="content1">
            <h2>Our Package</h2>
            <p>More than one destination you will visit</p>
        </div>
        <div class="content2">
            <div class="card card1">
                <p><span>1st Package</span></p>
                <h4>Private Trip</h4>
                <p>Enjoy the luxury of having your own private guide, who will take you to hidden gems and off-the-beaten-path locations that you won't find in any guidebook.</p>
                <img class="awan1" src={Awan} alt=""/>
                <img class="awan2" src={Awan} alt=""/>
                <img class="awan3" src={Awan} alt=""/>
                <img class="awan4" src={Awan} alt=""/>
                <img class="awan5" src={Awan} alt=""/>
            </div>
            <div class="card card2">
                <p>2nd Package</p>
                <h4><span>Open Trip</span></h4>
                <p>With an open trip, you'll have the opportunity to connect with travelers from all over the world, creating lifelong friendships and unforgettable memories. </p>
                <img class="awan1" src={Awan} alt=""/>
                <img class="awan2" src={Awan} alt=""/>
                <img class="awan3" src={Awan} alt=""/>
                <img class="awan4" src={Awan} alt=""/>
                <img class="awan5" src={Awan} alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurPackage
