import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BlogDetails from "../Components/Blogs/BlogDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <errorElement></errorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/blogs/${params.id}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
