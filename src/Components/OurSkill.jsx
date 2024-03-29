import skill1 from "../assets/skills/Client-01.png";
import skill2 from "../assets/skills/Client-02.png";
import skill3 from "../assets/skills/Client-03.png";
import skill4 from "../assets/skills/Client-04.png";
import skill5 from "../assets/skills/Client-new06.png";
import Marquee from "react-fast-marquee";

const OurSkill = () => {
  return (
    <div data-aos="fade-down-right" className="border-b-2 my-5">
      <div className="md:flex mt-10">
        <div className="md:w-1/2">
          <h1 className="text-xl text-[#2097fc]">OUR SKILLS</h1>
          <p className="text-4xl text-[#052944] py-2">
            Discover the Great Benefits <br />
            of Our Skills
          </p>
          <p>
            We provides all the basics you would expect, plus those cleaning
            “extras” and special touches that are difficult to find elsewhere.{" "}
            <br />
            Our cleaning services are thorough, consistent and customized. If
            you would like to request a special service, change your cleaning
            schedule, or skip an area in your home.
          </p>
        </div>
        <div className="py-5">
          <div className="mt-20">
            <div className="label">
              <span className="label-text">Сleaning</span>
              <span className="label-text-alt">90%</span>
            </div>
            <progress
              title="clean"
              className="progress progress-primary h-3 md:w-[600px]"
              value={90}
              max="100"
            ></progress>
            <div className="label">
              <span className="label-text">Organization</span>
              <span className="label-text-alt">80%</span>
            </div>
            <progress
              className="progress progress-primary h-3 w-full"
              value="80"
              max="100"
            ></progress>
            <div className="label">
              <span className="label-text">Repairs</span>
              <span className="label-text-alt">70%</span>
            </div>
            <progress
              className="progress h-3 progress-primary w-full"
              value="70"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-10">
        <Marquee className="">
          <img src={skill1} alt="" className="mr-20 hover:" />
          <img src={skill2} alt="" className="mr-20" />
          <img src={skill3} alt="" className="mr-20" />
          <img src={skill4} alt="" className="mr-20" />
          <img src={skill5} alt="" className="mr-20" />
        </Marquee>
      </div>
    </div>
  );
};

export default OurSkill;
