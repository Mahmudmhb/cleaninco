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
  NavbarToggle,
} from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const nav = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      {" "}
      <NavLink to="/services">Services</NavLink>
    </li>

    <li>
      {" "}
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </>
);
const Navber = () => {
  const { user, handleLogOut } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    handleLogOut().then().catch();
  };

  return (
    <div>
      <Navbar className="h-20" fluid rounded>
        <NavbarBrand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="cleaninco " />
        </NavbarBrand>
        <div className="flex md:order-2">
          {user ? (
            <>
              <div className="mr-5">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      className="ml-5"
                      alt="User settings"
                      img={user?.photoURL}
                      rounded
                    />
                  }
                >
                  <span className="block text-sm">{user?.displayName} </span>
                </Dropdown>
              </div>
              <Dropdown label="Deshborad">
                <DropdownHeader>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </DropdownHeader>
                <DropdownItem>
                  <NavLink to="/manageservice">Manage User Service</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/myscheduls">My Scheduls</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink to="/addservice">Add Service</NavLink>
                </DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Earnings</DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
              </Dropdown>
              <NavbarToggle />
            </>
          ) : (
            <Link className="uppercase p-2" to="/login">
              Login
            </Link>
          )}
        </div>
        <NavbarCollapse className="uppercase text-[#052944]">
          {nav}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Navber;
