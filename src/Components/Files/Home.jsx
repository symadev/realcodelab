import Banner from "./Banner";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import TechStack from "./TechStack";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div>
            <section id="home">
            <Banner ></Banner>
            </section>
             <section id="how-it-works">
            <HowItWorks></HowItWorks>
            </section>
             <section id="features">
            <Features></Features>
            </section>
             
            <TechStack></TechStack>
            <section id="testimonials">
            <Testimonial></Testimonial>
            </section>
            
        </div>
    );
};

export default Home;