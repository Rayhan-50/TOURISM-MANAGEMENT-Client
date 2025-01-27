


import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddStory = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
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
      // Upload main images to ImgBB
      const storyImages = await Promise.all(
        Array.from(data.images).map((image) => uploadImageToImgBB(image))
      );
  
      // Create new story object, including user email from context
      const newStory = {
        title: data.title,
        text: data.text,
        images: storyImages, 
        user: user?.email, 
      };
  
      // Send the new story to the backend
      const response = await axiosPublic.post("/stories", newStory);
  
      if (response.data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Story added successfully!',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
  
        // Redirect to the manage stories page
        navigate("/dashboard/manage-stories");
        reset();
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add story. Please try again.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Story</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter story title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Text */}
        <div>
          <label className="block font-medium mb-1">Story Text</label>
          <textarea
            {...register("text", { required: "Story text is required" })}
            className="w-full p-2 border rounded"
            placeholder="Enter story content"
          />
          {errors.text && (
            <p className="text-red-500 text-sm">{errors.text.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Upload Images (multiple)</label>
          <input
            type="file"
            {...register("images", { required: "At least one image is required" })}
            className="w-full p-2 border rounded"
            accept="image/*"
            multiple
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
        
         <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Add Story"}
          </button>
        
        </div>
   
      </form>
    </div>
  );
};

export default AddStory;
