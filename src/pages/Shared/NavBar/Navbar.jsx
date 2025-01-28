
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import img1 from '../../../assets/logo.png';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] =useCart();


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Logged Out',
          text: 'You have successfully logged out.',
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        console.error('Logout error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Logout Failed',
          text: 'Something went wrong while logging out.',
          confirmButtonText: 'Try Again',
        });
      });
  };

  return (
    <nav className="py-4 fixed z-10 bg-opacity-30 w-full bg-black text-white">
      <div className="w-full mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={img1} alt="Logo" className="w-10 h-10 mr-3" />
          <h1 className="text-lg font-bold">Tourism Management System</h1>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex gap-x-6 absolute md:static w-full md:w-auto left-0 md:left-auto top-16 md:top-auto ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'hover:text-gray-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'hover:text-gray-300'
              }
            >
              Community
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'hover:text-gray-300'
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trips"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'hover:text-gray-300'
              }
            >
              Trips
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/dashboard/intro"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500 pb-1'
                  : 'hover:text-gray-300'
              }
            >
            <div className="">
              DashBoard
              <div className="badge mx-1">+{cart.length}</div>
            </div>
            </NavLink>
          </li>
        </ul>

      

       
{user ? (
  <div className="relative">
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      <img
        src={user.photoURL || '/default-profile.png'}
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
      <p className="text-sm font-medium">{user.displayName}</p>
    </div>

    {menuOpen && (
      <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-48">
        <NavLink
          to="/dashboard/intro"
          className="block px-4 py-2 hover:bg-gray-100"
          onClick={() => setMenuOpen(false)}
        >
          Dashboard
        </NavLink>
        <button
          className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
          onClick={() => {
            handleLogout();
            setMenuOpen(false);
          }}
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <div className="hidden md:flex gap-3">
    <NavLink
      to="/login"
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Login
    </NavLink>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
