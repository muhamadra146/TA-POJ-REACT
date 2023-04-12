import React from 'react'
import Pantai1 from '../asset/gambar/destination-detail/pantai1.jpg'
import Pantai2 from '../asset/gambar/destination-detail/pantai2.jpg'
import Pantai3 from '../asset/gambar/destination-detail/pantai3.jpg'
import Pantai4 from '../asset/gambar/destination-detail/pantai4.jpg'
import Pantai5 from '../asset/gambar/destination-detail/pantai5.jpg'
import bintang from '../asset/gambar/destination-detail/bintang.png'
import MostPopular from '../components/MostPopular2/MostPopular2'
import YourHelp from '../components/yourhelp/YourHelp'
import Footer from '../components/Footer/Footer'

function Privatetripdetail() {
  return (
    <>
    <div class="section-detail">
        <div class="container">
            <div class="content">
                <div class="content1">
                    <h3>Bali</h3>
                    <div class="location">
                        <p><i class="fa-solid fa-tag"></i> Island/Adventure</p>
                        <p><i class="fa-solid fa-location-dot"></i> Bali, Indonesia</p>
                        <p><i class="fa-solid fa-location-dot"></i> Private Trip</p>
                    </div>
                    <div class="gallery">
                        <div class="gallery__main">
                          <img src={Pantai1} id="main" alt="Gallery image" />
                        </div>
                      ​
                        <div class="gallery__previews">
                          <img src={Pantai1} onclick="changeImage(this.src)" alt="Gallery image" />
                          <img src={Pantai2} onclick="changeImage(this.src)" alt="Gallery image" />
                          <img src={Pantai3} onclick="changeImage(this.src)" alt="Gallery image" />
                          <img src={Pantai4} onclick="changeImage(this.src)" alt="Gallery image" />
                          <img src={Pantai5} onclick="changeImage(this.src)" alt="Gallery image" />
                        </div>
                      </div>
                    <div class="button">
                        <button type="button" class="btn btn-success" id="btn1" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Description</button>
                        <button type="button" class="btn btn-success" id="btn2" data-bs-toggle="collapse" href="#collapseExample2">What’s include</button>
                    </div>
                    <div id="collapseExample" class="collapse show">
                        <div class="card card-body">
                            <p>If you're planning a trip to Bali, you might want to consider a visit to Nusa Penida. This beautiful island is located southeast of Bali and is known for its stunning beaches, crystal clear waters, and picturesque landscapes.
                                In this article, we'll take a closer look at Nusa Penida and provide you with some tips for planning your trip. <br/><br/> The easiest way to get to Nusa Penida is to take a fast boat from Sanur or Padang Bai. The journey
                                takes approximately 45 minutes to 1 hour, depending on the sea conditions. You can also take a ferry from Padang Bai, which is cheaper but takes longer.</p>
                        </div>
                    </div>
                    <div id="collapseExample2" class="collapse">
                        <div class="card card-body">
                            <div class="acomodation">
                                <span><i class="fa-solid fa-medal"></i>Featured Trip</span>
                                <p>What you can get in private trip package:</p>
                                <ul>
                                    <li>Customize Acomodation</li>
                                    <li>Any destination you want</li>
                                    <li>Trip with private group or solo trip</li>
                                    <li>Create any event you want (Gathering, Games, Meetings. etc)</li>
                                    <li>1 Day free (include vehicle)</li>
                                    <li>Guided by our agents</li>
                                </ul>
                            </div>
                            <div class="acomodation">
                                <span><i class="fa-solid fa-car"></i>Acomodation</span>
                                <p>Nusa Penida has a variety of accommodations to choose from, ranging from budget-friendly guesthouses to luxury resorts. Some popular options include:
                                </p>
                                <ul>
                                    <li> Semabu Hills Hotel Nusa Penida</li>
                                    <li>Daphila Cottage</li>
                                    <li>La Roja Bungalows</li>
                                    <li>Nusa Veranda Sunset Villas & Restaurant</li>
                                </ul>
                            </div>
                            <div class="destination">
                                <span><i class="fa-solid fa-map-location"></i>Destination</span>
                                <ul>
                                    <li>Visit Kelingking Beach</li>
                                    <li>Explore Angel's Billabong</li>
                                    <li>Snorkel at Crystal Bay</li>
                                    <li>Visit Broken Beach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content2">
                    <div class="card">
                        <div class="rating">
                            <p>Destination overview</p>
                        </div>
                        <div class="rating">
                            <div class="content-left">
                                <h5>Bali, Indonesia</h5>
                                <h6>60 reviews</h6>
                            </div>
                            <div class="content-right">
                                <p><img src={bintang} alt=""/>4.5</p>
                            </div>
                        </div>
                        <div class="rating">
                            <div class="content-left">
                                <h6>Price</h6>
                                <h5>Rp. 2.500.000 / Pax</h5>
                            </div>
                        </div>
                        <div class="rating">
                            <div class="content-left">
                                <h6>Duration</h6>
                                <h5>4 Days 3 Nights</h5>
                            </div>
                        </div>
                        <div>
                            <div><button>Book Now</button></div>
                            <hr/>
                        </div>
                        <div>
                            <p>Specials offer for new traveler 15 % off.    
                            <br/> Valid until 5 August 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MostPopular/>
    <YourHelp/>
    <Footer/>
    </>
  )
}

export default Privatetripdetail
