


// import React from 'react';
// import logo from '../../../assets/logo.png';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
       
//         <div className="flex flex-col items-center md:items-start ml-5">
//           <img src={logo} alt="Tourism Logo" className="w-20 mb-4" />
//           <h2 className="text-lg font-semibold">Tourism Management System</h2>
//           <p className="text-sm mt-2 text-gray-400">
//             Explore the beauty of Bangladesh with us.
//           </p>
//         </div>

        
//         <div className="flex flex-col items-center md:items-start">
//           <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <a href="/about" className="text-gray-400 hover:text-white">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="/community" className="text-gray-400 hover:text-white">
//                 Community
//               </a>
//             </li>
//             <li>
//               <a href="/trips" className="text-gray-400 hover:text-white">
//                 All Trips
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="text-gray-400 hover:text-white">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>

        
//         <div className="flex flex-col items-center md:items-start">
//           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white"
//             >
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
//         © {new Date().getFullYear()} Tourism Management System. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// 2nd attemt



// import React from "react";
// import logo from "../../../assets/logo.png";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-white py-8"> {/* Changed bg-gray-800 to bg-primary */}
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         <div className="flex flex-col items-center md:items-start ml-5">
//           <img src={logo} alt="Tourism Logo" className="w-20 mb-4" />
//           <h2 className="text-lg font-semibold">Tourism Management System</h2>
//           <p className="text-sm mt-2 text-gray-300">
//             Explore the beauty of Bangladesh with us.
//           </p>
//         </div>

//         <div className="flex flex-col items-center md:items-start">
//           <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
//           <ul className="space-y-2">
//             <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
//             <li><a href="/community" className="text-gray-300 hover:text-white">Community</a></li>
//             <li><a href="/trips" className="text-gray-300 hover:text-white">All Trips</a></li>
//             <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
//           </ul>
//         </div>

//         <div className="flex flex-col items-center md:items-start">
//           <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//           <div className="flex space-x-4">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
//               <FaFacebookF />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
//               <FaTwitter />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
//               <FaInstagram />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-300">
//         © {new Date().getFullYear()} Tourism Management System. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// 3rd attempt

import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start ml-5">
          <img src={logo} alt="Tourism Logo" className="w-20 mb-4" />
          <h2 className="text-lg font-semibold">Tourism Management System</h2>
          <p className="text-sm mt-2 text-gray-200">
            Explore the beauty of Bangladesh with us.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-200 hover:text-white transition">About Us</a></li>
            <li><a href="/community" className="text-gray-200 hover:text-white transition">Community</a></li>
            <li><a href="/trips" className="text-gray-200 hover:text-white transition">All Trips</a></li>
            <li><a href="/contact" className="text-gray-200 hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition text-xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition text-xl">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Tourism Management System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

