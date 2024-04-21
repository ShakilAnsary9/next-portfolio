import Image from "next/image";
import Logo from "@/public/images/logo-shakil.png";
import Time from "./Time";

const Navbar = () => {
  return (
    <div className="web__navbar container p-0 d-flex justify-content-between">
      <div className="nav__context d-flex">
        <div className="logo">
          <Image src={Logo} alt="shakil" priority />
        </div>
        <div className="d-flex align-items-center ps-4">
          <Time />
        </div>
      </div>
      <div className="menu h-100">
        <div className="desk__menu h-100">
          <ul className="d-flex align-items-center">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
