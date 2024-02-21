import slider1 from "../../assets/slider/full-shot-men-cleaning-office_23-2149345551.jpg";
import slider2 from "../../assets/slider/full-shot-people-cleaning-office_23-2150454568.avif";
import slider3 from "../../assets/slider/professional-cleaning-service-people-working-together-office_23-2150520596.avif";
import sliderleft from "../../assets/slider/slider-img-1.png";

const Slider = () => {
  return (
    <div className="carousel h-[80vh] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
          className="w-full"
        />
        <div className="absolute justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <img src={sliderleft} alt="" />
          <h1 className="text-5xl font-bold text-[#052943]">
            We Cover Large <br /> Range of Cleaning <br />
            Services
          </h1>
          <button className="btn btn-warning uppercase pr-5 mr-5">
            Warning
          </button>
          <button className="uppercase font-bold">Watch Video</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
