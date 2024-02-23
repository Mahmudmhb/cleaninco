import logo from "../../assets/Logo/logo-1.png";
import { Link, NavLink } from "react-router-dom";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const nav = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      {" "}
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      {" "}
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </>
);
const Navber = () => {
  return (
    <div>
      <Navbar className="h-20" fluid rounded>
        <NavbarBrand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="cleaninco " />
        </NavbarBrand>
        <div className="flex md:order-2">
          <Link className="uppercase p-2" to="/login">
            Login
          </Link>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>
        <NavbarCollapse className="uppercase text-[#052944]">
          {nav}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Navber;
