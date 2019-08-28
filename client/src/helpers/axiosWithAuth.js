import axios from 'axios';

function axiosWithAuth() {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    });
}

export default axiosWithAuth;
