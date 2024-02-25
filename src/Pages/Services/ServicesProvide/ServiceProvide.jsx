import { useEffect, useState } from "react";
import { HiPhoneMissedCall } from "react-icons/hi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const ServiceProvide = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://cleaninco-server.vercel.app/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // AOS.init();

  return (
    <div>
      <div
        data-aos="fade-in"
        className="grid w-5/6 mx-auto md:grid-cols-3 gap-4"
      >
        <div className=" py-12 col-span-1 ">
          <div data-aos="fade-left">
            <h1 className="text-xl text-[#2097fc]">SERVICE PROVIDE</h1>
            <p className="text-4xl text-[#052944] my-12">
              We are proving all type of cleaning solutions for every small and
              big businesses.
            </p>
          </div>
          <div data-aos="zoom-in" className="bg-[#fae33c]   p-10 md:absolute">
            <h1 className="text-xl mt-5">
              FOR SERVICES & IMMEDIATE <br /> ATTENTION 24/7
            </h1>
            <div className="flex justify-end">
              <div>
                <HiPhoneMissedCall className="text-left h-36 w-36 font-thin text-[#d9c641]" />
              </div>
            </div>
            <h1 className="text-2xl">CALL US NOW:</h1>
            <span className="text-3xl font-bold">(+123)-456-7890</span>
          </div>
        </div>

        <div className=" col-span-2 grid md:grid-cols-2 gap-3 ">
          {services.slice(0, 4).map((service) => (
            <div key={service.id} className="card  shadow-xl h-80 image-full">
              <figure>
                <img
                  src={service.image1}
                  alt={service.heading1}
                  data-aos="fade-right"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mt-20 hover:text-[#2097fc] text-3xl">
                  {service.heading1}
                </h2>
                <p className="hover:text-[#2097fc] text-xl">
                  {service.heading2}
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/servicedetails/${service._id}`}>
                    <button className="hover:text-white  hover:translate-x-2 border-none btn btn-warning uppercase pr-5 rounded mr-5">
                      details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  ">
        <img
          src="https://cleaninco-demo.pbminfotech.com/demo2/wp-content/uploads/sites/3/2019/04/Bg-img-01.jpg?id=9709"
          alt=""
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default ServiceProvide;
