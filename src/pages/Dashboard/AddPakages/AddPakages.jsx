


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const AddPakages = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const [loading, setLoading] = useState(false);
//   const axiosPublic = useAxiosPublic();

//   const uploadImageToImgBB = async (image) => {
//     const formData = new FormData();
//     formData.append("image", image);

//     const response = await fetch(image_hosting_api, {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     if (result.success) {
//       return result.data.display_url;
//     } else {
//       throw new Error("Image upload failed");
//     }
//   };

//   const onSubmit = async (data) => {
//     setLoading(true);

//     try {
//       // Upload image to ImgBB
//       const imageUrl = await uploadImageToImgBB(data.image[0]);

//       // Create new package object
//       const newPackage = {
//         ...data,
//         image: imageUrl,
//       };

//       // Send the new package to the backend
//       const response = await axiosPublic.post("/pakages", newPackage);

//       if (response.data.insertedId) {
//         Swal.fire({
//           title: 'Success!',
//           text: 'Package added successfully!',
//           icon: 'success',
//           confirmButtonText: 'Okay'
//         });
//         reset();
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to add package. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'Okay'
//       });
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Add New Package</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         {/* Title */}
//         <div>
//           <label className="block font-medium mb-1">Title</label>
//           <input
//             type="text"
//             {...register("title", { required: "Title is required" })}
//             className="w-full p-2 border rounded"
//             placeholder="Enter package title"
//           />
//           {errors.title && (
//             <p className="text-red-500 text-sm">{errors.title.message}</p>
//           )}
//         </div>

//         {/* Type */}
//         <div>
//           <label className="block font-medium mb-1">Type</label>
//           <input
//             type="text"
//             {...register("type", { required: "Type is required" })}
//             className="w-full p-2 border rounded"
//             placeholder="Enter package type (e.g., Beach Holiday)"
//           />
//           {errors.type && (
//             <p className="text-red-500 text-sm">{errors.type.message}</p>
//           )}
//         </div>

//         {/* Price */}
//         <div>
//           <label className="block font-medium mb-1">Price</label>
//           <input
//             type="number"
//             {...register("price", { required: "Price is required" })}
//             className="w-full p-2 border rounded"
//             placeholder="Enter package price"
//           />
//           {errors.price && (
//             <p className="text-red-500 text-sm">{errors.price.message}</p>
//           )}
//         </div>

//         {/* Image Upload */}
//         <div>
//           <label className="block font-medium mb-1">Upload Main Image</label>
//           <input
//             type="file"
//             {...register("image", { required: "Image is required" })}
//             className="w-full p-2 border rounded"
//             accept="image/*"
//           />
//           {errors.image && (
//             <p className="text-red-500 text-sm">{errors.image.message}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             disabled={loading}
//           >
//             {loading ? "Uploading..." : "Add Package"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddPakages;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPakages = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();

  const uploadImageToImgBB = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      return result.data.display_url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Upload main image to ImgBB
      const imageUrl = await uploadImageToImgBB(data.image[0]);

      // Upload gallery images to ImgBB
      const galleryImages = await Promise.all(
        Array.from(data.gallery).map((image) => uploadImageToImgBB(image))
      );

      // Create new package object with gallery images
      const newPackage = {
        ...data,
        image: imageUrl,
        gallery: galleryImages, // Add gallery images array
      };

      // Send the new package to the backend
      const response = await axiosPublic.post("/pakages", newPackage);

      if (response.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Package added successfully!',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add package. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Package</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter package title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="block font-medium mb-1">Type</label>
          <input
            type="text"
            {...register("type", { required: "Type is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter package type (e.g., Beach Holiday)"
          />
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            {...register("price", { required: "Price is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter package price"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Main Image</label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
            className="w-full p-2 border rounded"
            accept="image/*"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Gallery Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Gallery Images (at least 5 images)</label>
          <input
            type="file"
            {...register("gallery", {
              required: "Gallery images are required",
              validate: (value) =>
                value.length >= 5 || "You must upload at least 5 images",
            })}
            className="w-full p-2 border rounded"
            accept="image/*"
            multiple
          />
          {errors.gallery && (
            <p className="text-red-500 text-sm">{errors.gallery.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Add Package"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPakages;
