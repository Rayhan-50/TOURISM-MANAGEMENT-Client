import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const TourGuideProfile = () => {
  const { id } = useParams();  
  const [guideDetails, setGuideDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch the guide details by id
    axiosPublic
      .get(`/guides/${id}`)
      .then((response) => {
        setGuideDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching guide details:", err);
        setLoading(false);
      });
  }, [id, axiosPublic]);

  if (loading) {
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
        </div>
      );
  }

  if (!guideDetails) {
    return <div>Guide not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        {guideDetails.name}
      </h1>
      <img
        src={guideDetails.profilePicture}
        alt={guideDetails.name}
        className="w-full h-96 object-cover rounded-md mb-6"
      />
      <p className="text-lg text-gray-600 mb-4">
        <span className="font-semibold">Specialization:</span> {guideDetails.specialization}
      </p>
      <p className="text-lg text-gray-600 mb-4">
        <span className="font-semibold">Experience:</span> {guideDetails.experience} years
      </p>
      <p className="text-lg text-gray-600 mb-4">{guideDetails.bio}</p>
    </div>
  );
};

export default TourGuideProfile;
