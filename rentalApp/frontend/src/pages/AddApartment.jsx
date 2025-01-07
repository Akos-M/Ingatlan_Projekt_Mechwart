import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';

const AddApartment = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('image', formData.image);

        try {
            await axios.post('/api/apartments/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/apartments');
        } catch (error) {
            setError(error.response?.data || 'Failed to add apartment');
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
                        background-image: url('src/pages/regist bg.png');
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
                        <div className="card" style={{height:'430px',width:'800px',justifyContent:'center',marginRight:'100px',backgroundColor:'hsla(74, 63.20%, 82.90%, 0.60)'}}>
                            <div className="card-body">
                                <h3 className="card-title text-center">Add Apartment</h3>
                                {error && <p style={{ color: 'red' }}>{JSON.stringify(error)}</p>}
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter apartment name"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            className="form-control"
                                            placeholder="Enter apartment description"
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Image</label>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            className="form-control"
                                            onChange={handleImageChange}
                                            required
                                        />
                                    </div>
                                    <button style={{backgroundColor:'hsl(52, 90%, 67%)', marginLeft:'180px'}} type="submit" className="btn btn-primary w-50">Add Apartment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddApartment;
