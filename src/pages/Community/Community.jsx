// import React from 'react';

// const Community = () => {
//     return (
//         <div>
//             community
//         </div>
//     );
// };

// export default Community;

import { useContext, useEffect, useState } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";

const CommunityPage = () => {
  const [stories, setStories] = useState([]);
  const { user } = useContext(AuthContext); // Access the user context
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all stories from the backend
    const fetchStories = async () => {
      try {
        const response = await axiosPublic.get("/stories"); // Assuming you have an endpoint for all stories
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, [axiosPublic]);

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
    // <div className="community-page">
    //   <h2 className="text-2xl font-bold mb-4">Community Stories</h2>
    //   <div className="stories-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //     {stories.map((story) => (
    //       <div key={story._id} className="story-card p-4 bg-white shadow-lg rounded-lg">
    //         <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
    //         <p className="text-gray-700 mb-2">{story.text}</p>
    //         <img
    //           src={story.images[0]}
    //           alt={story.title}
    //           className="w-full h-48 object-cover rounded-lg mb-2"
    //         />
    //         <div className="flex justify-between items-center">
    //           {/* Share Button */}
    //           <div>
    //             <FacebookShareButton
    //               url={`https://yourwebsite.com/stories/${story._id}`}
    //               quote={story.title}
    //               className="inline-block"
    //             >
    //               <FacebookIcon size={32} round />
    //             </FacebookShareButton>
    //           </div>

    //           {/* If not logged in, prompt to log in */}
    //           {!user && (
    //             <button
    //               onClick={() => handleShareClick(story._id)}
    //               className="text-blue-600 hover:text-blue-700"
    //             >
    //               Log in to Share
    //             </button>
    //           )}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="tourist-story-section py-20">
          <h2 className="text-2xl font-bold mb-4 text-center">Tourist Stories</h2>
          <div className="stories-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {stories.map((story) => (
              <div key={story._id} className="story-card p-4 bg-white shadow-lg rounded-lg">
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
    
       
        </div>
  );
};

export default CommunityPage;
