import { Link as RouterLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { navItems } from "@/constants/navItems";
import CustomDropdown from "@/components/commom/CustomDropdown";

export default function Footer() {

  return (
    <div>
      {/* Navbar section */}
      <Navbar fluid rounded>
        <Navbar.Brand as={RouterLink} to="https://flowbite-react.com">
          <h5 className="text-xl font-bold text-red-500">Shop Digest</h5>
        </Navbar.Brand>
        <div className="flex-grow flex items-center justify-center">
          {/* Centered nav links */}
          <Navbar.Collapse>
            {navItems.map((item) => (
              <Navbar.Link as={RouterLink} to={item.path} key={item.label}>
                {item.label}
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </div>
        <div className="flex items-center justify-end">
          {/* Right-aligned icons and button */}
          <div className="mr-3">
            <CustomDropdown
              background="bg-blue-500"
              label="English"
            ></CustomDropdown>
          </div>
          <div className="mr-3">
            <CustomDropdown
              background="bg-blue-500"
              label="Light Mode"
            ></CustomDropdown>
          </div>
        </div>
      </Navbar>

      <hr className="divider my-6" />

      <div className="flex justify-between px-3 py-1 mb-3">
        <div>@2021-2022 Flowbite. All rights reserved.</div>
        <div className="flex items-center">
          {["fa-facebook", "fa-twitter", "fa-instagram", "fa-google", "fa-twitter"].map(
  (item) => (
    <span className="icon mr-2" key={item}>
      <i className={`fab ${item}`}></i>
    </span>
  )
)}
        </div>
      </div>
    </div>
  );
}
