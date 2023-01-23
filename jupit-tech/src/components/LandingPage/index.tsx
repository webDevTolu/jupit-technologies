import BestServices from "./BestServices";
import Hero from "./Hero";
import OurServices from "./OurServices";
import Testimonials from "./Testionials";

const LandingPageComponent = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <OurServices />
      <BestServices />
      <Testimonials />
    </div>
  );
};

export default LandingPageComponent;
