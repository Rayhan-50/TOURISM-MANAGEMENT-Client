


import React, { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ManageStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); 
  const [deleteConfirmation, setDeleteConfirmation] = useState(null); 
  const axiosPublic = useAxiosPublic();

  // Fetch stories from the API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const response = await axiosPublic.get('/stories');
        if (Array.isArray(response.data)) {
          setStories(response.data);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [axiosPublic]);

 
  const handleDelete = async (storyId) => {
    // Show the SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setIsDeleting(true);
          const response = await axiosPublic.delete(`/stories/${storyId}`);
          if (response.status === 200) {
           
            setStories(stories.filter((story) => story._id !== storyId));
            setDeleteConfirmation(null); 
            Swal.fire('Deleted!', 'Your story has been deleted.', 'success');
          }
        } catch (err) {
          setError(err.response?.data?.message || err.message);
          Swal.fire('Error!', 'There was an issue deleting the story.', 'error');
        } finally {
          setIsDeleting(false);
        }
      }
    });
  };

  // Show confirmation dialog for deletion
  const confirmDelete = (storyId) => {
    setDeleteConfirmation(storyId);
  };

  // Cancel the delete action
  const cancelDelete = () => {
    setDeleteConfirmation(null);
  };

  if (loading) {
    return <p>Loading stories...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!stories.length) {
    return <p>No stories available.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <div
            key={story._id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{story.title}</h2>
            <p className="text-gray-600">{story.text}</p>

             {/* Display all images in a grid layout */}
             {story.images && story.images.length > 0 && (
                  <div className="image-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2">
                    {story.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${story.title} image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
            <div className="mt-4 flex justify-between">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
              <button
                onClick={() => confirmDelete(story._id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
            {deleteConfirmation === story._id && (
              <div className="mt-2">
                <p>Are you sure you want to delete this story?</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleDelete(story._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Deleting...' : 'Yes, Delete'}
                  </button>
                  <button
                    onClick={cancelDelete}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageStories;
