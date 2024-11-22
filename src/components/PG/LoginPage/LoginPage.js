import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (email && password) {
            alert('Login Successful');
            navigate('/pgdetails'); 
        } else {
            alert('Invalid login credentials');
        }
    };

    return (
        <div className="login-container">
            <h2><u>Login to our PG</u></h2>
            <form onSubmit={handleSubmit}>
                <label for ="email">Email</label>
                <input type="email" id="email" required placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        
                <label for ="password">Password</label>
                <input type="password" id="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate('/')}>Back to Home Page</button>
        </div>
    );
}

export default LoginPage;
