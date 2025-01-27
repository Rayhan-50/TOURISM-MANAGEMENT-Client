import TourReviews from "../../../assets/components/TourReviews";
import TravelerTips from "../../../assets/components/TravelerTips";
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
          <TravelerTips></TravelerTips>
          <TourReviews></TourReviews>
          </div>
          
        </div>
    );
};

export default Home;