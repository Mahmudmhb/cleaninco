import { Carousel } from "flowbite-react";
import testimonialImage from "../assets/testimonial/testimonial-bg.jpg";

const Testimonial = () => {
  return (
    <div className="flex relative">
      {/* <div>
        <div className=" scroll-py-5 ml-10 py-12">
          <h1 className="text-xl text-[#2097fc]">TESTIMOANIL</h1>
          <p className="text-5xl text-[#052944] py-2">What our clients say?</p>
          <img src={testimonialImage} className="w-1/2" alt="" />
        </div>
      </div> */}
      <div className=" h-96 absolute">
        <Carousel pauseOnHover>
          <div>
            <h1>
              I use this cleaning service for my office and I’m so happy to have
              found them. They are affordable and provide the best customer
              service experience.I would recommend Marta in particular.
            </h1>
          </div>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
