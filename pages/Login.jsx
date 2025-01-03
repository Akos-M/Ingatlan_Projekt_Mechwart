import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/', credentials);
            localStorage.setItem('token', response.data.access);
            navigate('/apartments');
        } catch (error) {
            alert('Login failed');
        }
    };

    return (
        <>
            <style>
                {`
                    html, body {
                        height: 100%;
                        margin: 0;
                    }
                    body {
                        background-image: url('src/pages/logbg.jpg');
                        background-position: center;
                        background-size: cover;
                        background-attachment: fixed;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={{height:'330px',width:'400px',justifyContent:'center',marginRight:'250px',backgroundColor:'hsla(42, 24.80%, 69.20%, 0.60)'}}>
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        placeholder="Enter username"
                                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    />
                                </div>
                                <button style={{backgroundColor:'hsl(33, 90.50%, 67.10%)', marginLeft:'90px'}} type="submit" className="btn btn-primary w-50">Login</button>
                            </form>
                            <button
                                onClick={() => navigate('/register')}
                                className="btn btn-link mt-3 w-100"
                            >
                                Go to Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
