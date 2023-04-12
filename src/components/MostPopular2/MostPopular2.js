import React from 'react'
import Reangcle1img from '../../asset/gambar/dicovery/Rectangle 29.png'
import Reangcle2img from '../../asset/gambar/dicovery/Rectangle 29 (1).png'
import Reangcle3img from '../../asset/gambar/dicovery/Rectangle 29 (2).png'
import Reangcle4img from '../../asset/gambar/dicovery/Rectangle 29 (3).png'

function MostPopular2() {
  return (
    <>
    <div class="section-most-popular">
        <div class="container">
            <div class="content1">
                <div class="content-left">
                    <p>Recommend</p>
                    <h3>Most Picked Destination</h3>
                </div>
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
            </div>
        </div>
    </div>
    </>
  )
}

export default MostPopular2
