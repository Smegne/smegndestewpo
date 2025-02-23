import React, { useState, useCallback } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Optimized toggle function
  const toggleMenu = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  return (
    <nav className="w-full h-24 sticky top-0 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b border-gray-600 px-6">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="w-28 h-auto" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden mdl:flex items-center gap-6 lg:gap-10">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            key={_id}
            className="text-base font-bold text-blue-400  tracking-wide cursor-pointer hover:text-designColor transition duration-300"
          >
            <Link activeClass="active" to={link} spy={true} smooth={true} offset={-70} duration={500}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMenu}
        className="text-xl mdl:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full text-designColor cursor-pointer"
        aria-label="Toggle Menu"
      >
        <FiMenu />
      </button>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-[80%] h-screen bg-gray-900 p-6 overflow-auto">
          <div className="flex flex-col gap-8 py-2 relative">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor transition duration-300 text-2xl cursor-pointer"
              aria-label="Close Menu"
            >
              <MdClose />
            </button>

            {/* Logo & Description */}
            <div>
              <img src={logo} alt="logo" className="w-32" />
              <p className="text-sm text-gray-400 mt-2">
                Welcome to our website. Explore our content and stay connected with us.
              </p>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col gap-4">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  key={_id}
                  className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor transition duration-300"
                >
                  <Link
                    onClick={toggleMenu}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div className="flex flex-col gap-4">
              <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaFacebookF />
                </span>
                <span className="bannerIcon">
                  <FaTwitter />
                </span>
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
