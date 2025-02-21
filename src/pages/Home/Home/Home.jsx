// import TourReviews from "../../../assets/components/TourReviews";
// import TravelerTips from "../../../assets/components/TravelerTips";
// import Banner from "../Banner/Banner";
// import OverviewSection from "../Overview/OverviewSection";
// import TourismTravelGuide from "../TourismTravelGuide/TourismTravelGuide";
// import TouristStorySection from "../TouristStorySection/TouristStorySection";

// const Home = () => {
//   return (
//     <div>
//       {/* <Banner></Banner>
//            <OverviewSection></OverviewSection>
//            <TourismTravelGuide></TourismTravelGuide>
//           <div className="py-10">
//           <TouristStorySection></TouristStorySection>
//           <TravelerTips></TravelerTips>
//           <TourReviews></TourReviews>
//           </div> */}
//       <main>
//         <section>
//           <Banner />
//         </section>
//         <section>
//           <OverviewSection />
//         </section>
//         <section>
//           <TourismTravelGuide />
//         </section>
//         <section className="py-10 space-y-16">
//           <TouristStorySection />
//           <TravelerTips />
//           <TourReviews />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import TourReviews from "../../../assets/components/TourReviews";
import TravelerTips from "../../../assets/components/TravelerTips";
import Banner from "../Banner/Banner";
import OverviewSection from "../Overview/OverviewSection";
import TourismTravelGuide from "../TourismTravelGuide/TourismTravelGuide";
import TouristStorySection from "../TouristStorySection/TouristStorySection";

// const Home = () => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   return (
//     <div className={`transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//       {/* Dark Mode Toggle Button */}
//       <button
//   className="fixed top-20 right-4 z-50 px-4 py-2 rounded-md shadow-lg transition-all 
//     bg-gray-800 text-white hover:bg-gray-600 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
//   onClick={() => setDarkMode(!darkMode)}
// >
//   {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
// </button>


//       <main>
//         <section>
//           <Banner />
//         </section>
//         <section>
//           <OverviewSection />
//         </section>
//         <section>
//           <TourismTravelGuide />
//         </section>
//         <section className="py-10 space-y-16">
//           <TouristStorySection />
//           <TravelerTips />
//           <TourReviews />
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Home;





const Home = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Dark Mode Toggle Button */}
      <button
        className="fixed top-20 right-4 z-50 px-4 py-2 rounded-md shadow-lg transition-all 
          bg-gray-800 text-white hover:bg-gray-600 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <main>
        <section>
          <Banner />
        </section>
        <section>
          <OverviewSection />
        </section>
        <section>
          <TourismTravelGuide />
        </section>
        <section className="py-10 space-y-16">
          <TouristStorySection darkMode={darkMode} />
          {/* <TravelerTips /> */}
          <TravelerTips darkMode={darkMode} />

          <TourReviews />
        </section>
      </main>
    </div>
  );
};

export default Home;



