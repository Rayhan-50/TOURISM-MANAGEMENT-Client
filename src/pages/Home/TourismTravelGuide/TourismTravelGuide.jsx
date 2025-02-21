



import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TourismTravelGuide = () => {
  const [packages, setPackages] = useState([]);
  const [guides, setGuides] = useState([]);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // Fetch random packages with axiosPublic
  useEffect(() => {
    axiosPublic
      .get("/packages/random") 
      .then((response) => {
        setPackages(response.data);
      })
      .catch((err) => {
        console.error("Failed to fetch packages:", err);
      });
  }, [axiosPublic]);

  // Fetch random tour guides with axiosPublic
  useEffect(() => {
    axiosPublic
      .get("/guides/random") 
      .then((response) => {
        setGuides(response.data);
      })
      .catch((err) => {
        console.error("Failed to fetch guides:", err);
      });
  }, [axiosPublic]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
        Tourism and Travel Guide
      </h2>
      <Tabs>
        <TabList>
          <Tab data-aos="fade-right">Our Packages</Tab>
          <Tab data-aos="fade-left">Meet Our Tour Guides</Tab>
        </TabList>

        {/* Our Packages Tab */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg._id}
                className="bg-white shadow-md rounded-md p-4"
                data-aos="zoom-in"
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Tour Type: {pkg.type}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  ${pkg.price}
                </p>
                <button
                  onClick={() => navigate(`/packages/${pkg._id}`)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  View Package
                </button>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* Meet Our Tour Guides Tab */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div
                key={guide._id}
                className="bg-white shadow-md rounded-md p-4"
                data-aos="zoom-in"
              >
                <img
                  src={guide.profilePicture}
                  alt={guide.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{guide.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Specialization: {guide.specialization}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  Experience: {guide.experience}
                </p>
                <button
                  onClick={() => navigate(`/guides/${guide._id}`)}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismTravelGuide;






