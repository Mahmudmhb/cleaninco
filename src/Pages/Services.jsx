import { useState } from "react";
// import { GiSlicedBread } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  const [loadmore, setLoadmore] = useState(6);
  const services = useLoaderData();
  const [servicesData, setServicesData] = useState(services);
  const [search, setSearch] = useState("");
  console.log(loadmore);
  const handlesearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };
  // console.log(search);
  // const handleSearch = () => {
  //   const filtered = services.filter(service =>
  //     service.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredServices(filtered);
  // };
  const handleSearchBtn = () => {
    // console.log("click btn");
    // const filtered = servicesData.filter(
    //   (service) => service.name.toLowerCase().includes(search)
    // service.name.toLowerCase().includes(search.toLowerCase())
    // );
    // console.log(filtered);
    // setServicesData(filtered);
  };
  return (
    <div className="my-10 text-center w-5/6 mx-auto">
      <div className="my-10">
        <input
          onChange={handlesearch}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={handleSearchBtn} className="btn btn-primary">
          Get Your Service
        </button>
      </div>

      {/* <h1>total service {servicesData.length}</h1> */}

      <div className="grid md:grid-cols-3 gap-4">
        {servicesData
          .slice(0, loadmore)
          .filter((service) => {
            return servicesData === ""
              ? service
              : service.serviceName.includes(search);
          })
          .map((service) => (
            <div key={service._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={service.photoUrl} alt={service.serviceName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title  flex justify-between">
                  <span className="text-xl text-[#052944]">
                    {" "}
                    {service.serviceName}
                  </span>
                  <div className="badge  p-3 badge-secondary">
                    Price: ${service.price}
                  </div>
                </h2>
                <p className="text-left">{service.description.slice(0, 100)}</p>
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={service.ProviderImage}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="text-left">
                      <h1>{service.name}</h1>
                    </div>
                  </div>
                  <div>
                    <p className="badge  p-3 badge-secondary">
                      Area: {service.area}
                    </p>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/usersevicedetails/${service._id}`}>
                    <button className="badge badge-outline">details</button>
                  </Link>
                  {/* <Link to={`/servicedetails/${service._id}`}>
                    <button className="badge badge-outline">details</button>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className={loadmore === services.length ? "hidden" : ""}>
        <button
          onClick={() => setLoadmore(services.length)}
          className="btn btn-primary my-5"
        >
          Show All Products
        </button>
      </div>
    </div>
  );
};

export default Services;
