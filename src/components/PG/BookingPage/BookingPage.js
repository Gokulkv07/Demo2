import React, { useState } from 'react';
import './BookingPage.css';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    occupation: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    sharingRooms: '',
    roomType: '',
    foodType: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyField = Object.keys(formData).find((key) => !formData[key]);
    if (emptyField) {
      alert(`Please fill out the ${emptyField} field.`);
      return;
    }

    alert('Booking Successful');

    navigate('/payment');
  };

  const handleGoBack = () => {
    navigate('/pgdetails'); 
  };

  return (
    <div className="form-container">
      <h2><u>Book Now</u></h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="occupation">Occupation:</label>
        <select
          id="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        >
          <option value="">Select Occupation</option>
          <option value="Working">Working</option>
          <option value="Student">Student</option>
        </select>

        <label htmlFor="country">Country:</label>
        <select
          id="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Iran">Iran</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Dubai">Dubai</option>
        </select>

        <label htmlFor="state">State:</label>
        <select
          id="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
        </select>

        <label htmlFor="city">City:</label>
        <select
          id="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          <option value="">Select City</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Amaravati">Amaravati</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Lucknow">Lucknow</option>
        </select>

        <label htmlFor="pincode">Pincode:</label>
        <input
          type="text"
          id="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />

        <label htmlFor="sharingRooms">Sharing Rooms:</label>
        <select
          id="sharingRooms"
          value={formData.sharingRooms}
          onChange={handleChange}
          required
        >
          <option value="">Select Sharing Rooms</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="No Sharing">No Sharing</option>
        </select>

        <label htmlFor="roomType">Room Type:</label>
        <select
          id="roomType"
          value={formData.roomType}
          onChange={handleChange}
          required
        >
          <option value="">Select Room Type</option>
          <option value="A/C">A/C</option>
          <option value="Non A/C">Non A/C</option>
        </select>

        <label htmlFor="foodType">Food Type:</label>
        <select
          id="foodType"
          value={formData.foodType}
          onChange={handleChange}
          required
        >
          <option value="">Select Food Type</option>
          <option value="Veg">Veg</option>
          <option value="Non Veg">Non Veg</option>
        </select>

        <button type="submit">Book Now</button>
      </form>
      <button onClick={handleGoBack}>Back to PG Details Page</button>
    </div>
  );
};

export default BookingPage;
