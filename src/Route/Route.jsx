import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import BlogDetails from "../Components/Blogs/BlogDetails";
// import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ServiceDetails from "../Pages/Services/ServicesProvide/ServiceDetails";
import Login from "../Pages/LoginPage/Login";
import SignUp from "../Pages/LoginPage/SignUp";
import ErrorPage from "../Pages/ErrorPage";
import Services from "../Pages/Services";
import AddService from "../Pages/Services/AddService";
import UserServiseDetails from "../Pages/Services/UserServiseDetails";
import ManageServices from "../Pages/Services/ManageServices";
import MySchedules from "../Pages/Services/MySchedules";
import PrivateRoute from "../Provider/PrivateRoute";

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
          fetch(`https://cleaninco-server.onrender.com/blogs/${params.id}`),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://cleaninco-server.onrender.com/newservices"),
      },
      {
        path: "usersevicedetails/:id",
        element: (
          <PrivateRoute>
            <UserServiseDetails></UserServiseDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cleaninco-server.onrender.com/newservices/${params.id}`
          ),
      },
      {
        path: "/manageservice",
        element: (
          <PrivateRoute>
            <ManageServices></ManageServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/myscheduls",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/servicedetails/:id",
        element: <PrivateRoute></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://cleaninco-server.onrender.com/services/${params.id}`),
      },
      {
        path: "/servicedetails",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("https://cleaninco-server.onrender.com/services/"),
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
