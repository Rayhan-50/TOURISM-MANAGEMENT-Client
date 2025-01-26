

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/Home/img.jpg';
import img2 from '../../../assets/Home/img2.jpg';
import img3 from '../../../assets/Home/img3.jpg';
import img4 from '../../../assets/Home/img4.jpg';
import img5 from '../../../assets/Home/banner2.jpeg';
import img6 from '../../../assets/Home/banner8.jpeg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
    );
};

export default Banner;