"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "../icons";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "HOME", to: "#home" },
    { label: "FEATURES", to: "#bills" },
    { label: "PREVIEW", to: "#insight" },
    { label: "CAREERS", to: "#how-it-works" },
    { label: "DETAILS", to: "#about", children: ["1"] },
    { label: "CONTACT", to: "#about" },
  ];

  return (
    <nav className="bg-primary relative z-[100] ">
      <div className="container-x">
        <div className="flex justify-between items-center h-[61px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-foreground">
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex gap-1">
            <div className="hidden md:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex">
              <Link
                to="/"
                className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
              >
                <Instagram />
              </Link>
              <Link
                to="/"
                className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
              >
                <Facebook />
              </Link>{" "}
              <Link
                to="/"
                className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
              >
                <Twitter />
              </Link>
              <Link
                to="/"
                className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
              >
                <Youtube />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900  focus:outline-none focus:ring-2 focus:ring-inset "
            >
              {isOpen ? (
                <X className="block h-6 w-6" color="white" />
              ) : (
                <Menu className="block h-6 w-6" color="white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-gray-900 hover:bg-gray-100"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex mt-6">
                <Link
                  to="/"
                  className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
                >
                  <Instagram />
                </Link>
                <Link
                  to="/"
                  className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
                >
                  <Facebook />
                </Link>{" "}
                <Link
                  to="/"
                  className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
                >
                  <Twitter />
                </Link>
                <Link
                  to="/"
                  className="text-white hover:text-gray-700 px-3 py-2 rounded-md text-xs font-medium"
                >
                  <Youtube />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
