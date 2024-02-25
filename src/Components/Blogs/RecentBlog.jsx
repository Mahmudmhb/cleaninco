import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentBlog = () => {
  const [recentBlog, setRecentBLog] = useState([]);
  useEffect(() => {
    fetch("https://cleaninco-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setRecentBLog(data));
  }, []);
  return (
    <div className="border-2 p-5">
      <h1 className=" text-[#05294a] font-bold py-5 ">Recent posts</h1>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div>
        {recentBlog.map((blog) => (
          <div key={blog._id} className=" flex gap-3 items-center ">
            <div className="w-20 h-20 my-5">
              <img src={blog.image1} alt={blog.heading1} />
            </div>

            <div>
              <Link
                to={`/blogdetails/${blog._id}`}
                className="  hover:text-[#2097fc] text-[#052944] transition duration-700ease-in-out font-bold "
              >
                {blog.heading1}
              </Link>

              <p className="font-thin">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
