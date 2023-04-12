import React from 'react'
import Group24 from '../asset/gambar/package/Group 24.png'
import image1 from '../asset/gambar/package/Rectangle 29.png'
import image2 from '../asset/gambar/package/Rectangle 29 (1).png'
import image3 from '../asset/gambar/package/Rectangle 29 (2).png'
import image4 from '../asset/gambar/package/Rectangle 29 (3).png'
import Discount from '../components/discount/Discount'
import Footer from '../components/Footer/Footer'

function Package() {
  return (
    <>
    {/* section top start */}
    <div class="section-top">
        <div class="container">
            <div class="content1">
                <div class="content-left">
                    <h1>Travel Package</h1>
                    <p>Looking for the perfect travel package? Look no further! We offer both open trips and private trips to [Destination], so you can choose the option that best suits your needs.</p>
                    <button>Explore Now <i class="fa-regular fa-circle-right"></i></button>
                </div>
                <div class="content-right">
                    <img src={Group24} alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* section top end */}

    {/* private trip start */}
    <div class="section-private-trip">
        <div class="container">
            <div class="section-private-trip1">
                <div class="content1">
                    <p>Solo Traveler</p>
                    <h3>Private Trip Experience</h3>
                </div>
                <div class="content2">
                    <div class="content-left">
                        <button><i class="fa-regular fa-calendar"></i> Choose your own date</button>
                        <button><i class="fa-solid fa-user-group"></i> Solo or intimate group</button>
                        <button><i class="fa-solid fa-hotel"></i> Custom destination</button>
                    </div>
                    <div class="content-right">
                        <p>Our team of experts will work with you to create a custom itinerary based on your interests, preferences, and travel style. Whether you're interested in exploring the local culture, indulging in delicious cuisine, or embarking on an adventurous outdoor excursion, we'll create a trip that's tailored to your specific needs.</p>
                    </div>
                </div>
            </div>
            <div class="section-private-trip2">
                <div class="content1">
                    <h3>Wonderful Place</h3>
                    <p>Any destination you want</p>
                </div>
                <div class="content2">
                    <div class="gambar">
                        <img src={image1} alt=""/>
                        <p><span>Bali Indonesia</span></p>
                    </div>
                   <div class="gambar">
                         <img src={image2} alt=""/>
                         <p><span>Nusa Penida</span></p>
                   </div>
                    <div class="gambar">
                        <img src={image3} alt=""/>
                        <p><span>Yogyakarta</span></p>
                    </div>
                    <div class="gambar">
                        <img src={image4} alt=""/>
                        <p><span>Bandung</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section-private-trip background-section-private-trip">
        <div class="container">
            <div class="section-private-trip1">
                <div class="content1">
                    <p>Solo Traveler</p>
                    <h3>Private Trip Experience</h3>
                </div>
                <div class="content2">
                    <div class="content-left">
                        <button><i class="fa-regular fa-calendar"></i> Choose your own date</button>
                        <button><i class="fa-solid fa-user-group"></i> Solo or intimate group</button>
                        <button><i class="fa-solid fa-hotel"></i> Custom destination</button>
                    </div>
                    <div class="content-right">
                        <p>Our team of experts will work with you to create a custom itinerary based on your interests, preferences, and travel style. Whether you're interested in exploring the local culture, indulging in delicious cuisine, or embarking on an adventurous outdoor excursion, we'll create a trip that's tailored to your specific needs.</p>
                    </div>
                </div>
            </div>
            <div class="section-private-trip2">
                <div class="content1">
                    <h3>Wonderful Place</h3>
                    <p>Any destination you want</p>
                </div>
                <div class="content2">
                    <div class="gambar">
                        <img src={image1} alt=""/>
                        <p><span>Bali Indonesia</span></p>
                    </div>
                   <div class="gambar">
                         <img src={image2} alt=""/>
                         <p><span>Nusa Penida</span></p>
                   </div>
                    <div class="gambar">
                        <img src={image3} alt=""/>
                        <p><span>Yogyakarta</span></p>
                    </div>
                    <div class="gambar">
                        <img src={image4} alt=""/>
                        <p><span>Bandung</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* private trip end */}

    {/* discount start */}
    <Discount/>
    {/* discount end */}

    {/* footer start */}
    <Footer/>
    {/* footer end */}

    </>
  )
}

export default Package
