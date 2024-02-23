import { useEffect, useState } from "react";
import { HiPhoneMissedCall } from "react-icons/hi";

const ServiceProvide = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/public/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <div className="grid md:grid-cols-3 gap-4">
        <div className=" py-12 col-span-1 ">
          <div>
            <h1 className="text-xl text-[#2097fc]">SERVICE PROVIDE</h1>
            <p className="text-4xl text-[#052944] py-5">
              We are proving all type of cleaning solutions for every small and
              big businesses.
            </p>
          </div>
          <div className="bg-[#fae33c]   p-10">
            <h1 className="text-xl mt-5">
              FOR SERVICES & IMMEDIATE <br /> ATTENTION 24/7
            </h1>
            <div className="flex justify-end">
              <span>
                <HiPhoneMissedCall className="text-left h-36 w-36 font-thin text-[#d9c641]" />
              </span>
            </div>
            <h1 className="text-2xl">CALL US NOW:</h1>
            <span className="text-3xl font-bold">(+123)-456-7890</span>
          </div>
        </div>

        <div className=" col-span-2 grid md:grid-cols-2 gap-3 ">
          {services.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="card  bg-base-100 shadow-xl h-80  image-full"
            >
              <figure>
                <img src={service.image1} alt={service.heading1} />
              </figure>
              <div className="card-body">
                <h2 className="card-title mt-20 hover:text-[#2097fc] text-2xl">
                  {service.heading1}
                </h2>
                <p>{service.heading2}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvide;
