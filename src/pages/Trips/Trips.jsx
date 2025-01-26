

import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";



const AllTrips = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

 
  useEffect(() => {
    axiosPublic
      .get("/pakages") 
      .then((response) => {
        setPackages(response.data);
      })
      .catch((err) => {
        console.error("Failed to fetch packages:", err);
      });
  }, [axiosPublic]);

  return (
    <div className="max-w-7xl mx-auto p-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-6">All Trips</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg._id} className="bg-white shadow-md rounded-md p-4">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
            <p className="text-sm text-gray-600 mb-2">Tour Type: {pkg.type}</p>
            <p className="text-lg font-semibold text-green-600">${pkg.price}</p>
            <button
              onClick={() => navigate(`/packages/${pkg._id}`)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              View Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTrips;
