import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import './Herotag.css'
const Herotag = () => {
  return (
    <div className='hero-page'>
        <img src={assets.header_img} alt="hero-photo"/>
        <div className='tags'>
            <p className='big'>Order Your Favourite Food here!!!</p>
            <p className='small'>Order your favorite food from a wide range of cuisines, right from spicy street treats to gourmet dishes. Simply browse, choose, and enjoy fresh flavors delivered straight to your doorstep.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Herotag