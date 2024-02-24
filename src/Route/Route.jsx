import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BlogDetails from "../Components/Blogs/BlogDetails";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ServiceDetails from "../Pages/Services/ServicesProvide/ServiceDetails";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/LoginPage/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import Services from "../Pages/Services";
import AddService from "../Pages/Services/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "servicedetails",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("http://localhost:5000/services/"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
