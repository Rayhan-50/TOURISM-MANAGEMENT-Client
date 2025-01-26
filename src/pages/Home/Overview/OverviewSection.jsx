
import React from 'react';

const OverviewSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Discover Bangladesh Like Never Before</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our curated travel packages and meet our expert tour guides to make your journey unforgettable.
        </p>
        <div className="relative">
          <iframe
            className="w-full h-64 sm:h-96 rounded-lg shadow-lg"
            src="https://www.youtube-nocookie.com/embed/QNUSIOMb6vI?si=0fYn-h_jJWBI1nJx&start=41"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
       
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
