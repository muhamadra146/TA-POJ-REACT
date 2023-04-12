import React from 'react'
import '../../asset/css/style.css'
import Darklogo from '../../asset/gambar/Dark logo.png'
import { NavItem } from './NavItem'
import { Link } from 'react-router-dom'


function navbar() {
  return (
    <>
    <header>
        <div class="logo"><img src={Darklogo} alt=""/></div>
        <nav>
            <ul>
                {/* <li><a href="#">Discover</a></li>
                <li><a href="4.destination.html" >Destination</a></li>
                <li><a href="5.package.html">Package</a></li>
                <li><a href="6.About-us.html">About Us</a></li> */}
                {NavItem.map((item,index) =>{
                    return (
                        <li key={index}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
                <div class="button-navbar"><a href="2.Register.html"><button>Register</button></a></div>
            </ul>
        </nav>
        <div class="button-nav"><a href="2.Register.html"><button>Register</button></a></div>
        <div class="menu-toggle">
            <i class="fa fa-bars"></i>
        </div>
    </header>
    </>
  )
}

export default navbar
