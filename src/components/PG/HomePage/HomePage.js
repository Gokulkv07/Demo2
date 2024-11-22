import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css'; 

function HomePage() {
  return (
    <div className="container">
      <div className="side-scrolling left-scrolling">
        <div className="scrolling-images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu0aDVmgFUkOgkYN3H9cIrPn-XP66psZVcmxpTtuRLY6SatFQ3Hv42D8&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsWqZGbdkMjAmvAFWgP-hGu-Hykqxulbkl_qUeXWk-2DTFzG9DWB7SIg&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQZ59YBkw7Tb_FEfaIrevmFcmCwWRVEs6kZ6D3pxvVK42V6Mm9M6xh88&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu0aDVmgFUkOgkYN3H9cIrPn-XP66psZVcmxpTtuRLY6SatFQ3Hv42D8&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsWqZGbdkMjAmvAFWgP-hGu-Hykqxulbkl_qUeXWk-2DTFzG9DWB7SIg&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQZ59YBkw7Tb_FEfaIrevmFcmCwWRVEs6kZ6D3pxvVK42V6Mm9M6xh88&s" alt="image not found" />
        </div>
      </div>

      <div className="pg-info">
        <h1><u><b>Welcome to our PG</b></u></h1>
        <p>Located in Bangalore, offering comfortable accommodations with Wi-Fi, AC, Laundry, and food.</p>
        <p className="link-container">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/pgdetails">PGDetails</Link>
        </p>

    
      </div>

      <div className="side-scrolling right-scrolling">
        <div className="scrolling-images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu0aDVmgFUkOgkYN3H9cIrPn-XP66psZVcmxpTtuRLY6SatFQ3Hv42D8&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsWqZGbdkMjAmvAFWgP-hGu-Hykqxulbkl_qUeXWk-2DTFzG9DWB7SIg&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQZ59YBkw7Tb_FEfaIrevmFcmCwWRVEs6kZ6D3pxvVK42V6Mm9M6xh88&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu0aDVmgFUkOgkYN3H9cIrPn-XP66psZVcmxpTtuRLY6SatFQ3Hv42D8&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDsWqZGbdkMjAmvAFWgP-hGu-Hykqxulbkl_qUeXWk-2DTFzG9DWB7SIg&s" alt="image not found" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQZ59YBkw7Tb_FEfaIrevmFcmCwWRVEs6kZ6D3pxvVK42V6Mm9M6xh88&s" alt="image not found" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
