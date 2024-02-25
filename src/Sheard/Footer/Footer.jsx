import { Link } from "react-router-dom";
import logo from "../../assets/Logo/footer.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer py-20 bg-[#052944] text-white">
        <aside className="ml-5">
          <img src={logo} alt="" className="w-48 ml-5" />
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className=" bg-[#021f34] text-[#b4bcc2] h-16 flex items-center justify-center">
        <p>
          Copyright © 2024{" "}
          <Link to="/" className="text-white  hover:text-[#2097fc]">
            CleaninCO Classic
          </Link>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
