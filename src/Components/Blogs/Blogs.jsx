import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://cleaninco-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="">
      <div className="text-center  py-12">
        <h1 className="text-xl text-[#2097fc]">PRESS ROOM</h1>
        <p className="text-5xl text-[#052944] font-bold py-5">
          Featured in the several <br />
          news and articles
        </p>
      </div>
      {/* <h1>total: {blogs.length}</h1> */}
      <div
        // data-aos="fade-down"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        className="md:grid md:grid-cols-3 md:gap-3 mx-auto"
      >
        {blogs.map((blog) => (
          <div
            data-aos="zoom-in-left"
            key={blog.id}
            className="mx-auto md:w-[350px] bg-base-100 "
          >
            <figure className="relative">
              <img
                src={blog.image1}
                alt={blog.heading1}
                data-aos="zoom-in-right"
              />
            </figure>
            <div>
              <h1 className="bg-[#ffe52c]  hover:text-[#2097fc] transition duration-700ease-in-out absolute uppercase font-bold -mt-6 px-2  hover:px-3  ">
                {blog.heading3}
              </h1>
            </div>
            <div className=" mt-5 space-y-2">
              <div></div>
              <p className="text-[#2097fc]  text-xl font-bold">{blog.date}</p>

              <div className="text-2xl font-bold hover:text-[#2097fc] text-[#052944] transition duration-700ease-in-out">
                <Link to={`/blogdetails/${blog._id}`}>
                  <button className="text-left">{blog.heading1}</button>
                </Link>
              </div>

              <p>{blog.heading4}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
