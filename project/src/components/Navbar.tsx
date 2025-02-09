import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Briefcase } from "lucide-react";
import TensFreeLogo from "./TensFreeLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky z-[200] top-5 left-0 right-0 text-white mx-auto w-4/5 backdrop-blur-lg bg-black/30 border-[1px]  rounded-lg border-slate-500/70 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-10">
          <Link
            to="/"
            className="flex divide-x divide-white/30 items-center space-x-2"
          >
            <img
              src={TensFreeLogo}
              alt="Logo"
              className="h-8 py-1 w-auto my-auto"
            />

            <span className="font-bold text-xl px-2 ">TensFree</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden  divide-solid  md:flex space-x-2 text-sm ">
            <Link
              to="/jobs"
              className="hover:bg-orange-500/20  rounded px-3 py-1 "
            >
              Jobs
            </Link>
            <Link
              to="/admit-card"
              className="hover:bg-orange-500/20 px-3 py-1 rounded"
            >
              Admit Card
            </Link>
            <Link
              to="/results"
              className="hover:bg-orange-500/20 px-3 py-1 rounded"
            >
              Results
            </Link>
            <Link
              to="/admission"
              className="hover:bg-orange-500/20 px-3 py-1 rounded"
            >
              Admission
            </Link>
            <Link
              to="/resources"
              className="hover:bg-orange-500/20 px-3 py-1 rounded"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="hover:bg-orange-500/20 px-3 py-1 rounded"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex   items-center text-sm space-x-4">
            <Link
              to="/signin"
              className="hover:bg-orange-500/40 bg-orange-500/15 text-sm px-3 py-1 rounded"
            >
              Sign up
            </Link>
            <Link
              to="/signup"
              className=" bg-orange-500/50 text-gray-50 px-4 mx-2  py-1 rounded font-medium hover:bg-orange-50/30"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex divide-y flex-col space-y-2">
              <Link to="/" className="hover:bg-orange-500/20 px-3 py-2 ">
                Home
              </Link>
              <Link to="/jobs" className="hover:bg-orange-500/20 px-3 py-2 ">
                Jobs
              </Link>
              <Link
                to="/admit-card"
                className="hover:bg-orange-500/20 px-3 py-2 "
              >
                Admit Card
              </Link>
              <Link to="/results" className="hover:bg-orange-500/20 px-3 py-2 ">
                Results
              </Link>
              <Link
                to="/admission"
                className="hover:bg-orange-500/20 px-3 py-2 "
              >
                Admission
              </Link>
              <Link
                to="/resources"
                className="hover:bg-orange-500/20 px-3 py-2 "
              >
                Resources
              </Link>
              <Link to="/contact" className="hover:bg-orange-500/20 px-3 py-2 ">
                Contact
              </Link>
              <Link
                to="/signin"
                className="hover:bg-orange-500/20 font-medium px-3 py-2 "
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-white text-orange-600 px-4 py-2  font-medium hover:bg-orange-50"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
