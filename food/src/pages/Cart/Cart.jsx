import React from 'react'
import './Cart.css'
import { useContext } from 'react';
import { Appcontext } from '../../contextx/Appcontext'
import { Link } from 'react-router-dom';
const Cart = () => {
  const { itemlist } = useContext(Appcontext);
  let total=0;
  console.log(itemlist);
  const itemsArray = Object.entries(itemlist)
    .filter(([_, item]) => item.clicked && item.count > 0)
    .map(([id, item]) => {
      total += item.price * item.count; // Update the total here
      return { id, ...item };
    });

  return (
    <div className='whole-cart-view'>
      <div className='topstructure'>
       
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        
      </div>
      <hr></hr>
      <div className='each-rows'>
        {
          itemsArray.map((items)=>(
            <div>
              <div className='each-struct'>
              
              <img src={`http://localhost:4000/uploads/
${items.image}`}/>
              <p>{items.name}</p>
              <p>${items.price}</p>
              <p>{items.count}.</p>
              <p>${items.price*items.count}</p>
             
              <button>x</button>
            
              </div>
              <hr></hr>
            </div>
            

          ))
        }
      </div>
      <div className='total-cost'>
        <div className='otherside'>
            <h4>Cart totals</h4>
            
            <div className='subtotal'>
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <hr></hr>
            <div className='delivery'>
              <p>Delivery</p>
              <p>$5</p>
            </div>
            <hr></hr>
            <div className='total'>
              <p>Total</p>
              <p>${total+5}</p>
            </div>
          
            <div className='buttonpay'>
              <Link to='/placeorder'><button>Proceed to Payment</button></Link>
            </div>
        </div>
        <div className='coupon-code'>
          <p>If you have a coupon code.Enter here.</p>
          <div className='submit'>
            <input type='text'placeholder='Enter the promo code'></input>
            <button>Submit</button>
          </div>
        
        </div>
      </div>
    
      
      
    </div>
  )
}

export default Cart