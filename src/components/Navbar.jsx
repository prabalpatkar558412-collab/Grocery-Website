import React, { useState, memo } from "react";
import { IoMenu } from "react-icons/io5";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

// -------- NAV LINKS --------
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Process", path: "/process" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const linkStyle =
    "relative inline-block text-gray-800 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="flex justify-between md:mx-8 items-center p-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-3xl cursor-pointer">
            Gr<span className="text-orange-500">O</span>cify
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name} className={linkStyle}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <CiSearch
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search"
              className="border-2 border-orange-500 rounded-2xl pl-10 pr-3 py-2 w-48 focus:w-64 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
            />
          </div>

          {/* Icons */}
          <FaHeart size={24} aria-label="Wishlist" />
          <FaCartArrowDown size={24} aria-label="Cart" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <IoMenu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 animate-fadeIn">
          <ul className="flex flex-col items-center gap-4 p-4 bg-white border rounded-xl shadow-md">
            {navLinks.map((link) => (
              <li key={link.name} className={linkStyle}>
                <Link to={link.path} onClick={closeMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
