import React from 'react'
import Vector1img from '../../asset/gambar/Vector.png'
import Vector2img from '../../asset/gambar/Vector-1.png'
import Vector3img from '../../asset/gambar/Vector-2.png'
import LightLogo from '../../asset/gambar/Light Logo.png'

function Footer() {
  return (
    <>
    <footer>
        <div class="container-footer">
            <div class="content1">
                <div class="item1">
                    <h4>Menu</h4>
                    <p>Discovery</p>
                    <p>Destination</p>
                    <p>Package</p>
                    <p>About us</p>
                </div>
                <div class="item2">
                    <h4>Features</h4>
                    <p>Open Trip</p>
                    <p>Private Trip</p>
                    <p>Destination Trip</p>
                </div>
                <div class="item3">
                    <h4>About us</h4>
                    <p>Need Help</p>
                    <p>Business Inquiry</p>
                    <p> Who we are</p>
                </div>
            </div>
            <div class="content2">
                <div class="content-left">
                    <img src={LightLogo} alt=""/>
                    <p>Jakarta, Indonesia</p>
                </div>
                <div class="content-right">
                    <ul>
                        <li><a href="#"><img src={Vector1img} alt=""/></a></li>
                        <li><a href="#"><img src={Vector2img} alt=""/></a></li>
                        <li><a href="#"><img src={Vector3img} alt=""/></a></li>
                    </ul>
                    <p>Copyright © 2023 Travelark. Indonesia</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
