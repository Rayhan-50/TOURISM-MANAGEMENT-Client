// import React, { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { AuthContext } from "./../../../providers/AuthProvider";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useCart from "../../../hooks/useCart";

// const PackageDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [packageDetails, setPackageDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useContext(AuthContext);
//   const axiosPublic = useAxiosPublic();
//   const axiosSecure =useAxiosSecure();
//   const [,refetch] = useCart();
//   const handleAddToCart = () => {
//     if (user && user.email) {
//       // send cart to database
//       // console.log(selectedPackage, user.email);
//       const cartItem = {
//         bookedId : packageDetails._id,
//         email: user.email,
//         name: packageDetails.title,
//         price: packageDetails.price,
//         image: packageDetails.image,

//       }
// axiosSecure.post('/carts',cartItem)
// .then(res =>{
//   console.log(res.data)
//   if(res.data.insertedId){
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "booked successfully",
//       showConfirmButton: false,
//       timer: 1500
//     });
//     // refetch the cart
//     refetch()
//   }
// })

//     } else {
//       Swal.fire({
//         title: "You are not logged in",
//         text: "Please log in to Book!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, login!",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // Redirect user to the login page
//           navigate("/login", {state: {from: location}});

//         }
//       });
//     }
//   };

//   useEffect(() => {
//     // Fetch package details from the server
//     const fetchPackageDetails = async () => {
//       try {
//         const response = await axiosPublic.get(`/packages/${id}`);
//         setPackageDetails(response.data);
//       } catch (err) {
//         console.error("Error fetching package details:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPackageDetails();
//   }, [id, axiosPublic]);

//   // Render loading state while data is being fetched
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
//       </div>
//     );
//   }

//   // Handle case when packageDetails is null or empty
//   if (!packageDetails) {
//     return <div>Package details not found.</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md pt-40">
//       <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
//         {packageDetails.title}
//       </h1>

//       {/* Gallery Section */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4 text-blue-500">Gallery</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {packageDetails.gallery.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Gallery image ${index + 1}`}
//               className="w-full h-40 object-cover rounded-md shadow-md"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Package Details */}
//       <img
//         src={packageDetails.image}
//         alt={packageDetails.title}
//         className="w-full h-96 object-cover rounded-md mb-6"
//       />
//       <p className="text-lg text-gray-600 mb-4">
//         <span className="font-semibold">Type:</span> {packageDetails.type}
//       </p>
//       <p className="text-2xl font-bold text-green-500 mb-6">
//         Price: ${packageDetails.price}
//       </p>
//       <p className="text-md text-gray-700">
//         This package is designed to provide an unforgettable experience. Whether
//         you are looking for relaxation or adventure, the {packageDetails.title}{" "}
//         offers it all in one stunning destination.
//       </p>
//       <button
//         className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         onClick={ handleAddToCart}
//       >
//         Book Now
//       </button>

//       {/* Accordion Section for Day Plans */}
//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold mb-4 text-blue-500">Tour Plan</h2>
//         {packageDetails.tourPlan?.map((plan, index) => (
//           <div className="collapse collapse-arrow bg-base-200 mb-4" key={index}>
//             <input type="radio" name="day-plan" defaultChecked={index === 0} />
//             <div className="collapse-title text-xl font-medium">
//               Day {index + 1}
//             </div>
//             <div className="collapse-content">
//               <p>{plan}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PackageDetails;

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

  const [packageDetails, setPackageDetails] = useState(null);
  const [guideDetails, setGuideDetails] = useState(null);
  const [tourDate, setTourDate] = useState(new Date());
  const [selectedGuide, setSelectedGuide] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch guide details
  useEffect(() => {
    axiosPublic
      .get("/guides/random")
      .then((response) => {
        setGuideDetails(response.data);
      })
      .catch((err) => {
        console.error("Failed to fetch guides:", err);
      });
  }, [axiosPublic]);
  console.log(user);
  // Fetch package details
  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axiosPublic.get(`/packages/${id}`);
        setPackageDetails(response.data);
      } catch (err) {
        console.error("Error fetching package details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPackageDetails();
  }, [id, axiosPublic]);

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!user) {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to book a package.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
      return;
    }

    if (!selectedGuide) {
      Swal.fire("Please select a tour guide.", "", "warning");
      return;
    }

    const bookingInfo = {
      packageId: packageDetails._id,
      packageName: packageDetails.title,
      touristName: user.displayName,
      email: user.email,
      touristImage: user.photoURL,
      price: packageDetails.price,
      tourDate: tourDate.toISOString(),
      guideName: selectedGuide,
      status: "pending",
    };

  axiosSecure.post('/carts',bookingInfo)
.then(res =>{
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "booked successfully",
      showConfirmButton: false,
      timer: 1500
    });
    // refetch the cart
    refetch()
  }
})
  };

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  // Handle case when packageDetails is null
  if (!packageDetails) {
    return <div>Package details not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md pt-40">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        {packageDetails.title}
      </h1>

      <img
        src={packageDetails.image}
        alt={packageDetails.title}
        className="w-full h-96 object-cover rounded-md mb-6"
      />

      {/* Gallery Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {packageDetails.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-gray-100 p-6 rounded-md shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-500">Book Now</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Package</label>
            <input
              type="text"
              value={packageDetails.title}
              readOnly
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Tourist Name</label>
            <input
              type="text"
              value={user?.displayName || "Guest"}
              readOnly
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Tourist Email</label>
            <input
              type="text"
              value={user?.email || ""}
              readOnly
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Price</label>
            <input
              type="text"
              value={`$${packageDetails.price}`}
              readOnly
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Tour Date</label>
            <DatePicker
              selected={tourDate}
              onChange={(date) => setTourDate(date)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Tour Guide</label>
            <select
              value={selectedGuide}
              onChange={(e) => setSelectedGuide(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select a guide</option>
              {guideDetails?.length ? (
                guideDetails.map((guide, index) => (
                  <option key={index} value={guide.name}>
                    {guide.name}
                  </option>
                ))
              ) : (
                <option value="">No guides available</option>
              )}
            </select>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
