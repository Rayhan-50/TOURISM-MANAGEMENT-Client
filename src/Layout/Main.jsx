import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/NavBar/Navbar";

const Main = () => {
    const location = useLocation();

    // console.log(location);
    const noHeaderFooter = location.pathname === '/login' || location.pathname === '/signup' ;
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
           <Outlet></Outlet>
              {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;