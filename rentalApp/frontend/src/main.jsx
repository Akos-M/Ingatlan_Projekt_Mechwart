import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Apartments from './pages/Apartments';
import AddApartment from './pages/AddApartment';


const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/add-apartment" element={<AddApartment />} />
        </Routes>
    </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);