
// import React from 'react';

// const TourReviews = () => {
//   return (
//     <section className="p-6 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-4">Customer Reviews</h2>

//       {/* Chat Review Section */}
//       <div className="chat chat-start">
//         <div className="chat-bubble">
//           "Had an amazing experience with this agency! The tour was well-organized and the guides were incredibly knowledgeable."
//         </div>
//       </div>
//       <div className="chat chat-end">
//         <div className="chat-bubble">"I loved the itinerary! Everything was smooth, and I felt like I was taken care of every step of the way."</div>
//       </div>
//       <div className="chat chat-start">
//         <div className="chat-bubble">
//           "Highly recommend! The trip was unforgettable, and the local experiences were beyond my expectations."
//         </div>
//       </div>
//       <div className="chat chat-end">
//         <div className="chat-bubble">"Excellent service, great accommodations, and friendly staff. A truly memorable adventure!"</div>
//       </div>
//       <div className="chat chat-start">
//         <div className="chat-bubble">
//           "I will definitely book another tour with this agency. The attention to detail was fantastic!"
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TourReviews;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TourReviews = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-down">
        Customer Reviews
      </h2>

      {/* Chat Review Section */}
      <div className="chat chat-start" data-aos="fade-up">
        <div className="chat-bubble">
          "Had an amazing experience with this agency! The tour was well-organized and the guides were incredibly knowledgeable."
        </div>
      </div>
      <div className="chat chat-end" data-aos="fade-up">
        <div className="chat-bubble">
          "I loved the itinerary! Everything was smooth, and I felt like I was taken care of every step of the way."
        </div>
      </div>
      <div className="chat chat-start" data-aos="fade-up">
        <div className="chat-bubble">
          "Highly recommend! The trip was unforgettable, and the local experiences were beyond my expectations."
        </div>
      </div>
      <div className="chat chat-end" data-aos="fade-up">
        <div className="chat-bubble">
          "Excellent service, great accommodations, and friendly staff. A truly memorable adventure!"
        </div>
      </div>
      <div className="chat chat-start" data-aos="fade-up">
        <div className="chat-bubble">
          "I will definitely book another tour with this agency. The attention to detail was fantastic!"
        </div>
      </div>
    </section>
  );
};

export default TourReviews;

