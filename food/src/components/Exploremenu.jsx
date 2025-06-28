import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../assets/frontend_assets/assets'
const Exploremenu = ({category,setCategory}) => {
    
  return (
    <div className='whole_menu'>
        <div className='explore'>
            <h4 className='h4tag'>Explore Our Menu</h4>
            <p className='ptag'>From comforting classics to bold new flavors, find all your favorite dishes right here. Order now and experience fast, fresh, and delicious meals brought directly to you.</p>

        </div>
        <div className='menu'>
        {
            menu_list.map((items)=>(
                <div className='each_menu' onClick={(prev)=>{
                    prev==items.menu_name?setCategory("All"):setCategory(items.menu_name)
                    }}>
                    <img src={items.menu_image} className={category===items.menu_name?"active":" "}/>
                    <p>{items.menu_name}</p>
                </div>
            ))
        }
       
        </div>
        <hr></hr>
    </div>

  )
}

export default Exploremenu