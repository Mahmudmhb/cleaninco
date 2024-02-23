import { useLoaderData } from "react-router-dom";
import { CgCheck } from "react-icons/cg";
import RecentBlog from "./RecentBlog";

const BlogDetails = () => {
  const bloger = useLoaderData();
  // console.log(bloger);
  return (
    <div className="my-20 w-5/6 mx-auto">
      <h1 className="text-3xl text-[#05294a] font-bold py-5">
        {bloger.heading1}
      </h1>
      <div className="grid md:grid-cols-3 gap-3 ">
        <div className="col-span-2 space-y-4">
          <div className="py-5">
            <div className="relative ">
              <img src={bloger.image1} alt="" />
            </div>
            <div className="bg-[#ffe52c]  hover:text-[#2097fc] transition duration-700ease-in-out absolute uppercase font-bold -mt-8 px-2  hover:px-3  ">
              <h1>Author: {bloger.authorName}</h1>
              <p>{bloger.date}</p>
            </div>
          </div>
          <h1 className="text-3xl text-[#05294a] font-bold py-5">
            {bloger.heading1}
          </h1>
          <p>{bloger.description1}</p>
          <p>{bloger.description2}</p>
          <div className="md:flex m-10">
            <img src={bloger.image2} alt="" />
            <div className="ml-5 space-y-6">
              <p>{bloger.heading4}</p>
              <div className="flex gap-2 items-center">
                <CgCheck className="text-[#2e97fc] text-3xl" />
                <p>{bloger.shortDescription1}</p>
              </div>
              <div className="flex gap-2 items-center">
                <CgCheck className="text-[#2e97fc] text-3xl" />
                <p>{bloger.shortDescription2}</p>
              </div>
              <div className="flex gap-2 items-center">
                <CgCheck className="text-[#2e97fc] text-3xl" />
                <p>{bloger.shortDescription3}</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl text-[#05294a] font-bold py-5">
              {bloger.heading2}
            </h1>
            <p>{bloger.description3}</p>
            <p>{bloger.description4}</p>
            <img src={bloger.image3} alt="" />
            <h1 className="text-3xl text-[#05294a] py-5 font-bold">
              {bloger.heading3}
            </h1>
            <p>{bloger.description1}</p>
          </div>
        </div>
        <div>
          <RecentBlog></RecentBlog>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
