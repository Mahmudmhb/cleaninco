import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BlogDetails from "../Components/Blogs/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <errorElement></errorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
]);
export default router;
