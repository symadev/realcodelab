import Banner from "./Banner";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import TechStack from "./TechStack";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Features></Features>
            <TechStack></TechStack>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;