import React from 'react'
import Hero1 from '../asset/gambar/about-us/Rectangle 49.png'
import Groupimg1 from '../asset/gambar/dicovery/Group 10.png'
import Groupimg2 from '../asset/gambar/dicovery/Group 10 (1).png'
import MostPick from '../components/MostPick/MostPick'
import OurPackage from '../components/OurPackage/OurPackage'
import YourHelp from '../components/yourhelp/YourHelp'
import Footer from '../components/Footer/Footer'

function about() {
  return (
    <>
    {/* section top start */}
    <br/><br/><br/><br/><br/>
    <div class="section-top">
        <div class="container">
            <div class="content1">
                <div class="content-left">
                    <h1>Travelark</h1>
                    <p>Travelark is a technology company that provides a comprehensive suite of services and solutions to travel agents and tour operators. Based in Indonesia, the company was founded with the mission of revolutionizing the travel industry by leveraging the latest technologies and innovative ideas.</p>
                    <button>Find out who we are <i class="fa-regular fa-circle-right"></i></button>
                </div>
                <div class="content-right right-content">
                    <div class="border bodir">
                        <img src={Hero1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* section top end */}


    {/* our value start */}
    <div class="our-value">
        <div class="container">
            <div class="content1">
                <div class="content-left">
                    <h1><span>Our value</span> <br/>for our Travelers</h1>
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
    {/* our value end */}

    <br/><br/>
    {/* our package start */}
    <OurPackage/>
    {/* our package end */}
    
    <br/><br/><br/><br/><br/><br/>
    {/* most pick start */}
    <MostPick/>
    {/* most pick end */}

    {/* your help start */}
    <YourHelp/>
    {/* your help end */}

    {/* footer start */}
    <Footer/>
    {/* footer end */}
    </>
  )
}

export default about
