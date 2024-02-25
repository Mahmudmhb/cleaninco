import slider1 from "../../assets/slider/full-shot-men-cleaning-office_23-2149345551.jpg";
import slider2 from "../../assets/slider/full-shot-people-cleaning-office_23-2150454568.avif";
import slider3 from "../../assets/slider/professional-cleaning-service-people-working-together-office_23-2150520596.avif";
import sliderleft from "../../assets/slider/slider-img-1.png";
import { LuPlayCircle } from "react-icons/lu";

const Slider = () => {
  return (
    <div className="carousel h-full w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full" />
        <div className="absolute flex items-center transform -translate-y-1/2  w-1/2 h-full top-1/2 bg-gradient-to-r from-[#eefafa] ">
          <div className=" ml-10 space-y-7">
            <img src={sliderleft} alt="" />
            <h1 className="text-5xl font-bold   text-[#052943]">
              We Cover Large <br /> Range of Cleaning <br />
              Services
            </h1>
            <div className="flex items-center">
              {" "}
              <button className="hover:text-white rounded-none hover:translate-x-2 border-none btn btn-warning uppercase pr-5 mr-5">
                Contact us
              </button>
              <button className="hover:text-white flex items-center rounded-none hover:translate-x-2 border-none uppercase font-bold">
                <LuPlayCircle className="mr-2" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide3" className="btn hover:text-2xl rounded-none">
            ❮
          </a>
          <a href="#slide2" className="btn hover:text-2xl rounded-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full" />
        <div className="absolute flex items-center transform -translate-y-1/2  w-1/2 h-full top-1/2 bg-gradient-to-r from-[#f3f4f6] ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" ml-10 space-y-7"
          >
            <img src={sliderleft} alt="" />
            <h1 className="md:text-5xl font-bold   text-[#052943]">
              We Cover Large <br /> Range of Cleaning <br />
              Services
            </h1>
            <div className="flex items-center">
              {" "}
              <button className="hover:text-white rounded-none hover:translate-x-2 border-none btn btn-warning uppercase pr-5 mr-5">
                Contact us
              </button>
              <button className="hover:text-white flex items-center rounded-none hover:translate-x-2 border-none uppercase font-bold">
                <LuPlayCircle className="mr-2" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide1" className="btn hover:text-2xl rounded-none">
            ❮
          </a>
          <a href="#slide3" className="btn hover:text-2xl rounded-none">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full" />
        <div className="absolute flex items-center transform -translate-y-1/2  w-1/2 h-full top-1/2 bg-gradient-to-r from-[#f3f4f6] ">
          <div className=" ml-10 space-y-7">
            <img src={sliderleft} alt="" />
            <h1 className="text-5xl font-bold   text-[#052943]">
              We Cover Large <br /> Range of Cleaning <br />
              Services
            </h1>
            <div className="flex items-center">
              {" "}
              <button className="hover:text-white rounded-none hover:translate-x-2 border-none btn btn-warning uppercase pr-5 mr-5">
                Contact us
              </button>
              <button className="hover:text-white flex items-center rounded-none hover:translate-x-2 border-none uppercase font-bold">
                <LuPlayCircle className="mr-2" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide2" className="btn hover:text-2xl rounded-none">
            ❮
          </a>
          <a href="#slide1" className="btn hover:text-2xl rounded-none">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
