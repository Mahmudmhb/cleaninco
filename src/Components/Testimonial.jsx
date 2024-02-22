import { FaQuoteLeft } from "react-icons/fa";
import testimonialImage from "../assets/testimonial/testimonial-bg.jpg";
import testimonial1 from "../assets/testimonial/testimonial-3.jpg";

const Testimonial = () => {
  return (
    <div className="md:flex md:relative">
      <div>
        <div className=" space-y-5 ml-10 py-12">
          <h1 className="text-xl text-[#2097fc]">TESTIMOANIL</h1>
          <p className="text-5xl text-[#052944] py-2">What our clients say?</p>
          <img src={testimonialImage} className="w-full md:-ml-48" alt="" />
        </div>
      </div>

      <div className="md:flex md:absolute md:w-1/2 text-white rounded md:-ml-20  md:right-0  justify-center  bg-[#2097fc] items-center">
        <div className=" p-20">
          <FaQuoteLeft className="h-20 w-20 absolute  text-[#ffe52c]" />

          <div className="space-y-4">
            <h1 className=" mt-20 text-2xl">
              I use this cleaning service for my office and I’m so happy to have
              found them. They are affordable and provide the best customer
              service experience.I would recommend Marta in particular.
            </h1>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={testimonial1}
                alt=""
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h1>Allien John</h1>
                <h1>Customer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
