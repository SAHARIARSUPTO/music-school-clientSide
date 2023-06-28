import Classes from "../Classes/Classes";
import Instructors from "../Instructors/Instructors";
import About from "./About";
import Uppercontent from "./Contents/Uppercontent";


const Homepage = () => {
    return (
        <div>
            <Uppercontent></Uppercontent>
            <Classes></Classes>
            <About></About>
            <Instructors></Instructors>
        </div>
    );
};

export default Homepage;