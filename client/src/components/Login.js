import React, { useState } from 'react';
import axios from 'axios';

function Login(props) {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        if (e.target.name === 'username') {
            setUserName(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    function userLogin(e) {
        e.preventDefault();

        axios
            .post('http://localhost:5000/api/login', { username: userName, password: password })
            .then(res => {
                localStorage.setItem('token', res.data.payload);
            })
            .then(() => {
                props.history.push('/bubbles');
            })
            .catch(err => {
                console.log(err.response);
            });
    }

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={userLogin}>
                <input type="text" name="username" placeholder="username" value={userName} onChange={handleChange} />
                <input type="password" name="password" placeholder="password" value={password} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;
