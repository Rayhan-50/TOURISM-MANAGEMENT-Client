

import React from 'react';

const AboutUsPage = () => {
  // Static developer information
  const developerInfo = {
    name: "John Doe",
    bio: "John is a passionate full-stack developer with over 5 years of experience in building web applications. He specializes in React, Node.js, MongoDB, and loves to create user-friendly interfaces.",
    projectCount: 10,
    projectLinks: [
      { name: "GadgetHaven", url: "https://gadgethaven.com" },
      { name: "Peddy", url: "https://peddy.com" },
      { name: "Lingo Bingo", url: "https://lingobingo.com" },
      { name: "Tourism Management System", url: "https://tourism-management.com" },
      { name: "Visa Navigator Portal", url: "https://visa-navigator.com" },
    ]
  };

  return (
    <div className="about-us-page p-6 pt-20">
      <h1 className="text-3xl font-bold mb-4">About the Developer</h1>
      <div className="developer-info bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">{developerInfo.name}</h2>
        <p className="text-lg text-gray-700 mb-4">{developerInfo.bio}</p>
        <p className="text-lg font-medium">Number of Projects Created: {developerInfo.projectCount}</p>
        <div className="projects-links mt-4">
          <h3 className="text-xl font-semibold mb-2">Project Links:</h3>
          <ul className="list-disc pl-5">
            {developerInfo.projectLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
