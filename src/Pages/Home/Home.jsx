import Testimonial from "../../Components/Testimonial";
import Navber from "../../Sheard/Headers/Navber";
import Slider from "../../Sheard/Slider/Slider";
import Process from "../Services/ServicesProvide/Process";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Slider></Slider>
      <Process></Process>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
