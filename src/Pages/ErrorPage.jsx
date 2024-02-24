import { Link } from "react-router-dom";
import Navber from "../Sheard/Headers/Navber";
import Footer from "../Sheard/Footer/Footer";

const ErrorPage = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="w-5/6, mx-auto text-center my-20">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230802153215/Error-404.png"
          alt=""
          className="w-full"
        />
        <Link to="/" className="text-center">
          <button className="btn  my-5 btn-secondary">Go Home</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
