import React, { memo } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// -------- DATA --------
const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const categories = ["Fruits", "Vegetables", "Dairy", "Bakery"];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Fresh<span className="text-orange-500">Basket</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            Your trusted online grocery store delivering fresh and organic
            products directly to your doorstep.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition text-white"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition text-white"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition text-white"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-orange-500 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categories.map((item) => (
              <li key={item} className="hover:text-orange-500 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Bhopal, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@freshbasket.com
            </p>
          </div>

          {/* Newsletter */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5"
          >
            <p className="text-sm mb-2">Subscribe to our newsletter</p>

            <div className="flex">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                type="submit"
                className="bg-orange-500 px-4 rounded-r-md text-white hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FreshBasket. All rights reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);