import Banner from "../Banner/Banner";
import OverviewSection from "../Overview/OverviewSection";
import TourismTravelGuide from "../TourismTravelGuide/TourismTravelGuide";
import TouristStorySection from "../TouristStorySection/TouristStorySection";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OverviewSection></OverviewSection>
           <TourismTravelGuide></TourismTravelGuide>
          <div className="py-10">
          <TouristStorySection></TouristStorySection>
          </div>
          
        </div>
    );
};

export default Home;