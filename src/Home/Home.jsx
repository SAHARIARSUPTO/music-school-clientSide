
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            { (location.pathname === "/") && (
   <Helmet>
   <title>Music School - Home</title>
   </Helmet>
)}
            <Navbar></Navbar>
            <Homepage></Homepage>
            <Footer></Footer>
        </div>
    );
};

export default Home;