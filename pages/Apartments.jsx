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

    const goToRegister = () => {
        navigate('/register');
    };

    const goToLogin = () => {
        navigate('/');
    };

    return (
        <div style={{ backgroundImage: "url('src/pages/mainbg.jpg')",backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed' }} >
            <nav className="navbar navbar-light" style={{backgroundColor:'hsl(13, 65%, 56%)'}}>
                <span style={{marginLeft:'20px'}} className="navbar-brand mb-0 h1">Apartment Rental Project</span>
                <div>
                    <button style={{backgroundColor:'hsl(39, 79.80%, 55.30%)'}} className="btn btn-outline-primary me-2" onClick={goToAddApartment}>Add Apartment</button>
                    <button style={{backgroundColor:'hsl(39, 79.80%, 55.30%)'}} className="btn btn-outline-primary me-3" onClick={goToLogin}>Login</button>
                    <button style={{backgroundColor:'hsl(39, 79.80%, 55.30%)'}} className="btn btn-outline-primary me-4" onClick={goToRegister}>Register</button>
                    <button style={{backgroundColor:'hsl(39, 79.80%, 55.30%)',marginRight:'30px'}} className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className="container mt-4" >
                <h1 style={{fontFamily:'"Brush Script MT", cursive',fontSize:'70px'}}>Available Apartments</h1>
                <div className="row" style={{margin:'80px'}}>
                    {apartments.map((apartment) => (
                        <div key={apartment.id} className="col-md-4">
                            <div className="card mb-4" style={{height:'500px',width:'300px',margin:'20px',marginLeft:'10px',marginRight:'10px',backgroundColor:'hsla(37, 55.60%, 70.00%, 0.64)',border:'2px solid black'}}>
                                <img style={{height:'300px',width:'275px',margin:'10px',border:'1px solid black'}}
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
            <nav style={{backgroundColor:'hsl(13, 65%, 56%)',height:'30px'}}><span className="navbar-brand mb-0 h1">Made by M.Ákos - S.László - V.Gréta</span></nav>
        </div>
    );
};

export default Apartments;