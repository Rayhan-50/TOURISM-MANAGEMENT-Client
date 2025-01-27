// import React, { useState } from "react";

// const JoinTourGuide = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     reason: "",
//     cvLink: "",
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setFormData({
//       title: "",
//       reason: "",
//       cvLink: "",
//     });
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Join as a Tour Guide</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium">
//             Application Title
//           </label>
//           <input
//             id="title"
//             name="title"
//             type="text"
//             placeholder="Enter application title"
//             value={formData.title}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label htmlFor="reason" className="block text-sm font-medium">
//             Why do you want to be a Tour Guide?
//           </label>
//           <textarea
//             id="reason"
//             name="reason"
//             placeholder="Explain why you'd like to join"
//             value={formData.reason}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label htmlFor="cvLink" className="block text-sm font-medium">
//             CV Link
//           </label>
//           <input
//             id="cvLink"
//             name="cvLink"
//             type="url"
//             placeholder="Enter CV link"
//             value={formData.cvLink}
//             onChange={handleInputChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
//             <h3 className="text-lg font-bold mb-2">Application Successful</h3>
//             <p>Your application has been submitted successfully!</p>
//             <button
//               onClick={closeModal}
//               className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JoinTourGuide;


import React, { useState, useContext } from "react";


import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const JoinTourGuide = () => {
  const { user } = useContext(AuthContext); 
  const axiosPublic = useAxiosPublic();
  console.log(user)
  const [formData, setFormData] = useState({
    title: "",
    reason: "",
    cvLink: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
   
    if (!user ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to log in to apply!",
      });
      return;
    }

    try {
    
      const response = await axiosPublic.patch(
        `/users/request-guide/${user.email}`, 
        {
          ...formData,
        }
      );

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Application submitted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to submit your application. Please try again later.",
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      title: "",
      reason: "",
      cvLink: "",
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Join as a Tour Guide</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Application Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter application title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="reason" className="block text-sm font-medium">
            Why do you want to be a Tour Guide?
          </label>
          <textarea
            id="reason"
            name="reason"
            placeholder="Explain why you'd like to join"
            value={formData.reason}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="cvLink" className="block text-sm font-medium">
            CV Link
          </label>
          <input
            id="cvLink"
            name="cvLink"
            type="url"
            placeholder="Enter CV link"
            value={formData.cvLink}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-bold mb-2">Application Successful</h3>
            <p>Your application has been submitted successfully!</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinTourGuide;
