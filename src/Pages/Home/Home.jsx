import Blogs from "../../Components/Blogs/Blogs";
import OurSkill from "../../Components/OurSkill";
import Success from "../../Components/Success";
import Testimonial from "../../Components/Testimonial";
import Navber from "../../Sheard/Headers/Navber";
import Slider from "../../Sheard/Slider/Slider";
import Process from "../Services/ServicesProvide/Process";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Slider></Slider>
      <div className="w-5/6 mx-auto">
        <Process></Process>
        <Testimonial></Testimonial>
        <OurSkill></OurSkill>
      </div>
      <Success></Success>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
