import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; 

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert('Signup Successful');
      navigate('/login');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="Signup-container">
      <h2><u>Signup to our PG</u></h2>
      <form onSubmit={handleSignup}>
      <label for ="name">Name</label>
      <input type="name" id="name" required placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}></input>

      <label for ="email">Email</label>
      <input type="email" id="email" required placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

      <label for ="password">Password</label>
      <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
      

        <button type="submit">Signup</button>
      </form>

      <button onClick={() => navigate('/')}>Back to Home Page</button>
    </div>
  );
}

export default SignupPage;




