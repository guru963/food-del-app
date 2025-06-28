import React from 'react'
import {assets} from "../assets/frontend_assets/assets"
import { IoSearch } from "react-icons/io5";
import { BsBasket3 } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import "./Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar-section'>
        <img src={assets.logo} alt="logo"/>
        <ul>
          
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile App</li>
            <li>Contact Us</li>
        </ul>
        <div className='icons'>
            <IoSearch/>
            <div className='basket'>
              <Link to='/cart'><BsBasket3/></Link>
              <div className='dot'></div>
            </div>
            <IoPerson/>
            <button>Sign In</button>
        </div>

    </div>
  )
}

export default Navbar