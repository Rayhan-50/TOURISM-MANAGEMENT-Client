



import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FacebookShareButton, FacebookIcon } from "react-share";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TouristStorySection = () => {
  const [stories, setStories] = useState([]);
  const { user } = useContext(AuthContext); // Access the user context
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch 4 random stories from the backend
    const fetchStories = async () => {
      try {
        const response = await axiosPublic.get("/stories/random"); // Assuming you have an endpoint for random stories
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, [axiosPublic]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation happens only once
    });
  }, []);

  const handleShareClick = (storyId) => {
    if (!user) {
      // If user is not logged in, redirect to login page
      navigate("/login");
    } else {
      // Proceed with sharing logic
      console.log(`Sharing story with ID: ${storyId}`);
    }
  };

  return (
    <div className="tourist-story-section" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-4 text-center" data-aos="fade-down">
        Tourist Stories
      </h2>
      <div className="stories-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stories.map((story) => (
          <div
            key={story._id}
            className="story-card p-4 bg-white shadow-lg rounded-lg"
            data-aos="zoom-in"
          >
            <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
            <p className="text-gray-700 mb-2">{story.text}</p>

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

            <div className="flex justify-between items-center">
              {/* Share Button */}
              <div>
                <FacebookShareButton
                  url={`https://yourwebsite.com/stories/${story._id}`}
                  quote={story.title}
                  className="inline-block"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>

              {/* If not logged in, prompt to log in */}
              {!user && (
                <button
                  onClick={() => handleShareClick(story._id)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Log in to Share
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* All Stories Button */}
      <div className="mt-4 text-center" data-aos="fade-up">
        <button
          onClick={() => navigate("/community")}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          All Stories
        </button>
      </div>
    </div>
  );
};

export default TouristStorySection;

