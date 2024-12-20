import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // Backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Token hozzáadása az összes kéréshez (ha elérhető)
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
