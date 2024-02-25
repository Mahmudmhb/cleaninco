import { useEffect, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://cleaninco-server.vercel.app/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const loader = useLoaderData();
  // console.log(loader);
  const {
    heading1,
    heading2,
    heading3,
    heading4,
    title1,
    title2,
    title3,
    title4,
    shortTitle1,
    shortTitle2,
    shortTitle3,
    shortTitle4,
    description1,
    description2,
    titleDescription,
    description4,
    image1,
    image2,
    icon1,
    icon2,
    iconTitle1,
    iconTitle2,
    iconHeading1,
    iconHeading2,
  } = loader;
  return (
    <div className="w-5/6 mx-auto my-14">
      <h1 className="text-7xl text-[#05294a] font-bold py-10">
        {loader.heading1}
      </h1>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="">
            {services.map((service) => (
              <div
                key={service._id}
                className=" bg-[#f4fbfd] m-5 p-2 hover:bg-[#2097fc] hover:text-white"
              >
                <Link to={`/servicedetails/${service._id}`}>
                  {" "}
                  <div className="flex justify-between">
                    <h1>{service.heading1}</h1>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 space-y-5">
          <div>
            {/* <h1 className="text-3xl text-[#05294a] font-bold py-5">
              {heading1}
            </h1> */}
            <img src={image1} alt="" />
            <h1 className="text-3xl text-[#05294a] font-bold py-5">
              {heading2}
            </h1>
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={icon1} alt="" />
              <div>
                <p className="text-3xl text-[#05294a] font-bold py-5">
                  {iconTitle1}
                </p>
                <h1>{iconHeading1}</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={icon2} alt="" />
              <div>
                <p className="text-3xl text-[#05294a] font-bold py-5">
                  {iconTitle2}
                </p>
                <h1>{iconHeading2}</h1>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <img src={image2} className="w-[380px]" alt="" />
            <div>
              <h1 className="text-3xl text-[#05294a] font-bold py-5">
                {heading4}
              </h1>
              <div className="collapse collapse-plus   ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title bg-[#2097fc] text-white text-xl font-medium">
                  {title1}
                </div>
                <div className="collapse-content">
                  <p>{shortTitle1}</p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title  bg-[#2097fc] text-white text-xl font-medium">
                  {title2}
                </div>
                <div className="collapse-content">
                  <p>{shortTitle2}</p>
                </div>
              </div>
              <div className="collapse collapse-plus my-5 bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title  bg-[#2097fc] text-white text-xl font-medium">
                  {title4}
                </div>
                <div className="collapse-content">
                  <p>{shortTitle4}</p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title  bg-[#2097fc] text-white text-xl font-medium">
                  {title3}
                </div>
                <div className="collapse-content">
                  <p>{shortTitle3}</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl text-[#05294a] font-bold py-5">{heading3}</h1>
          <p>{description4}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
