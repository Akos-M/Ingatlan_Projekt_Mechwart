import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

const Apartments = () => {
    const [apartments, setApartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await axios.get('/api/apartments/');
                setApartments(response.data);
            } catch (error) {
                console.error('Failed to fetch apartments:', error);
            }
        };

        fetchApartments();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const goToAddApartment = () => {
        navigate('/add-apartment');
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Apartment Rental Project</span>
                <div>
                    <button className="btn btn-outline-primary me-2" onClick={goToAddApartment}>Add Apartment</button>
                    <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className="container mt-4">
                <h1 >Available Apartments</h1>
                <div className="row">
                    {apartments.map((apartment) => (
                        <div key={apartment.id} className="col-md-4">
                            <div className="card mb-4">
                                <img
                                    src={apartment.image}
                                    className="card-img-top"
                                    alt={apartment.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{apartment.name}</h5>
                                    <p className="card-text">{apartment.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Apartments;