import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const token = sessionStorage.getItem('accessToken')
    if(token){
        window.location.replace(`/`);
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/students/login', {
                email,
                password
            });

            const accessToken = res.data.data.accessToken
            sessionStorage.setItem("accessToken", accessToken)

            window.location.replace(`/`);


        } catch (error) {
            console.error('Register error:', error.response.data);
            throw error;
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl">
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="Spotify" className="w-32" />
                </div>
                <div className="mb-4">
                    <ul className="flex justify-center space-x-4 text-gray-400">
                        <li className="cursor-pointer text-white text-3xl">Login</li>
                    </ul>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Log In
                    </button>

                    <p className='mt-4 text-white'>Not registered? <a href="/register" className='text-green-500'>Register</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
