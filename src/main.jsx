import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BlogDetails from "./Components/Blogs/BlogDetails";
import router from "./Route/Route";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/about",
//         element: <About></About>,
//       },
//       {
//         path: "/contact",
//         element: <Contact></Contact>,
//       },
//       {
//         path: "/blogs/:id",
//         element: <BlogDetails></BlogDetails>,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
