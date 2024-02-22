import { useEffect, useState } from "react";

const Process = () => {
  const [procsses, SetProcesses] = useState([]);
  useEffect(() => {
    const url = "/public/process.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetProcesses(data));
  }, []);
  // console.log(procsses);
  return (
    <div className="">
      <div className="text-center scroll-py-5 py-12">
        <h1 className="text-xl text-[#2097fc]">OUR PROCESS</h1>
        <p className="text-5xl text-[#052944] py-5">
          Get amazing cleaning <br />
          in 4 simple steps
        </p>
      </div>
      <div className="md:grid md:grid-cols-4 gap-2">
        {procsses.map((proces) => (
          <div key={proces.id} className="card ">
            <div className="rounded-[50%]  mx-auto h-[186px] relative w-[186px] border-4	">
              <figure className="px-10 pt-10">
                <img src={proces.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="absolute flex items-center justify-center font-bold text-xl top-0 right-0 bg-[#ffe52c] h-14 w-14 text-center rounded-[50%]  hover:bg-red-600 text-white ">
                0{proces.id}
              </div>
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{proces.heading}</h2>
              <p>{proces.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
