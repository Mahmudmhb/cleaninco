import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home/Home";
import Footer from "../Sheard/Footer/Footer";
import Navber from "../Sheard/Headers/Navber";

const Root = () => {
  return (
    <div className="mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
