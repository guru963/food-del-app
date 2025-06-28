import React, { useState } from 'react';
import './Placeholder.css';
import { useContext } from 'react';
import { Appcontext } from '../../contextx/Appcontext'
const Placeholder = () => {
   const { itemlist } = useContext(Appcontext);
    let total=0;
    console.log(itemlist);
    const itemsArray = Object.entries(itemlist)
      .filter(([_, item]) => item.clicked && item.count > 0)
      .map(([id, item]) => {
        total += item.price * item.count; // Update the total here
        return { id, ...item };
      });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Delivery Info Submitted:", formData);
    alert("Your delivery details have been submitted successfully!");
    // You can redirect or store the data now
  };

  return (
    <div className='whole-delivery-website'>
      <div className="delivery-container">
      <h2>Delivery Details</h2>
      <form onSubmit={handleSubmit} className="delivery-form">
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="address"
          placeholder="Full Address"
          required
          value={formData.address}
          onChange={handleChange}
        />
        <div className="form-row">
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            required
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          required
          value={formData.postalCode}
          onChange={handleChange}
        />
        <button type="submit">Confirm Delivery</button>
      </form>
     
    </div>
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
    </div>
    </div>
  );
};

export default Placeholder;
