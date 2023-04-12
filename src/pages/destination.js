import React from 'react'
import Group23img from '../asset/gambar/destination/Group 23.png'
import MostPopular2 from '../components/MostPopular2/MostPopular2'
import OurPackage from '../components/OurPackage/OurPackage'
import Reangcle1img from '../asset/gambar/dicovery/Rectangle 29.png'
import Reangcle2img from '../asset/gambar/dicovery/Rectangle 29 (1).png'
import Reangcle3img from '../asset/gambar/dicovery/Rectangle 29 (2).png'
import Reangcle4img from '../asset/gambar/dicovery/Rectangle 29 (3).png'
import Discount from '../components/discount/Discount'
import Footer from '../components/Footer/Footer'



function destination() {
  return (
    <>
    {/* section top start */}
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
                        <img src={Group23img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* section top end */}

    <br/>
    <br/>

    {/* most popular2 start */}
    <MostPopular2/>
    {/* most popular2 end */}

    {/* our package start */}
    <OurPackage/>
    {/* our package end */}

    {/* wonderful start */}
    <div class="section-wonderful">
        <div class="content1">
            <h2>Wonderful Destination</h2>
            <p>More than just destination</p>
        </div>
        <div class="content2">
            <div class="gambar">
                <img src={Reangcle1img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle2img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle3img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle4img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle1img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle2img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle3img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle4img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle1img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle2img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle3img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
            <div class="gambar">
                <img src={Reangcle4img} alt=""/>
                <h5></h5>
                <p> <span>Nusa Penida</span> <br/> Kelungkung, Bali</p>
            </div>
        </div>
    </div>
    {/* wonderful end */}

    {/* discount start */}
    <Discount/>
    {/* discount end */}

    {/* footer start */}
    <Footer/>
    {/* footer end */}
    </>
  )
}

export default destination
