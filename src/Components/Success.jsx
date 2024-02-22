import success1 from "../assets/success/close-up-disinfecting-with-cleaning-supplies_23-2148529578.jpg";
import success2 from "../assets/success/happy-father-talking-son-while-cleaning_23-2148457041.avif";
import success3 from "../assets/success/man-is-tired-from-cleaning_23-2148112279.avif";
import success4 from "../assets/success/medium-shot-people-cleaning-building_23-2150454517.avif";
// import bg from "../assets/success/bg-img.png";
import "./Success.css";
import { GiMedallist, GiVacuumCleaner } from "react-icons/gi";
import { MdCleanHands } from "react-icons/md";

const Success = () => {
  return (
    <div>
      <div className=" bg  my-10 py-10">
        <div className="md:flex md:justify-between items-center">
          <div className="text-center space-y-5  mx-auto ">
            {/* <img
              src={success1}
              alt=""
              className="w-32 h-32 mx-auto rounded-full"
            /> */}
            <div className="bg-[#ffe52c] flex justify-center items-center rounded-full p-5">
              <GiVacuumCleaner className=" w-24 h-24 font-bold text-[#052944]" />
            </div>

            <h1 className="text-6xl font-bold  text-white">854</h1>
            <h1 className="text-white mb-2">Carpets Cleaned</h1>
          </div>
          <div className="text-center space-y-5 mx-auto text-white">
            <div className="bg-[#ffe52c] flex justify-center items-center rounded-full p-5">
              <MdCleanHands className=" w-24 h-24 font-bold text-[#052944]" />
            </div>
            <h1 className="text-6xl font-bold  text-white">285</h1>
            <h1>Successful Projects</h1>
          </div>{" "}
          <div className="text-center space-y-5  mx-auto text-white">
            <div className="bg-[#ffe52c] flex justify-center items-center rounded-full p-5">
              <GiMedallist className=" w-24 h-24 font-bold text-[#052944]" />
            </div>

            <h1 className="text-6xl font-bold  text-white">385</h1>
            <h1>Happy Customer</h1>
          </div>
          <div className="text-center space-y-5  mx-auto text-white">
            <img
              src={success4}
              alt=""
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h1 className="text-6xl font-bold  text-white">185</h1>
            <h1>Cleaning Staff</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
