import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/register/', formData);
            alert('Registration successful!');
            navigate('/'); // Visszairányít a Login oldalra
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
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
                            <h3 className="card-title text-center">Register</h3>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button style={{backgroundColor:'hsl(33, 90.50%, 67.10%)', marginLeft:'90px'}} type="submit" className="btn btn-primary w-50">Register</button>
                            </form>
                            <button onClick={() => navigate('/')} className="btn btn-link mt-3 w-100">Back to Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;
