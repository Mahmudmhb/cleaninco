import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className=" mb-20">
      <div className="text-center scroll-py-5 py-12">
        <h1 className="text-xl text-[#2097fc]">PRESS ROOM</h1>
        <p className="text-5xl text-[#052944] font-bold py-5">
          Featured in the several <br />
          news and articles
        </p>
      </div>
      {/* <h1>total: {blogs.length}</h1> */}
      <div className="grid md:grid-cols-3 gap-3 mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto w-96 bg-base-100 ">
            <figure className="relative">
              <img src={blog.image1} alt={blog.heading1} />
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
