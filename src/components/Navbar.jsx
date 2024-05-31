import React from 'react';
import logo from '../assets/logo.png'
import axios from 'axios';


const Navbar = () => {
  const token = sessionStorage.getItem('accessToken')

  const onLogout = async () => {
    const accessToken = sessionStorage.getItem('accessToken');

    try {

      await axios.post('/api/v1/students/logout', {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      window.location.reload()
      sessionStorage.removeItem('accessToken');
    } catch (error) {
      console.error('Logout error', error.response?.data);
      throw error;
    }
  }
  
  return (
    <>
    {
      token ? (<>
          <div className="relative bg-gray-700 top-0 left-0 w-full flex justify-between items-center 
          p-4 shadow-md">
            <div className="logo">
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <div className="links flex gap-4 justify-center items-center">
              <a href="/" className="text-lg font-medium mx-4 text-green-500 hover:text-white transition-colors">Course List</a>
              <a href="/StudentDashBoard" className="text-lg font-medium mx-4 text-green-500 hover:text-white transition-colors">Dashboard</a>
              <button onClick={onLogout} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400
               to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white
               dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Logout
                </span>
              </button>
            </div>
          </div>
      </>):(
        <></>
      )
    }
    </>
  );
};

export default Navbar;
