import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Briefcase } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky z-[200] top-5 left-0 right-0 text-white mx-auto w-4/5 backdrop-blur-lg bg-black/30 border rounded-xl border-slate-500  shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-10">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8" />
            <span className="font-bold text-xl">TensFree</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:bg-orange-500/15 px-3 py-1 rounded">
              Home
            </Link>
            <Link
              to="/jobs"
              className="hover:bg-orange-500/15 px-3 py-1 rounded"
            >
              Jobs
            </Link>
            <Link
              to="/admit-card"
              className="hover:bg-orange-500/15 px-3 py-1 rounded"
            >
              Admit Card
            </Link>
            <Link
              to="/results"
              className="hover:bg-orange-500/15 px-3 py-1 rounded"
            >
              Results
            </Link>
            <Link
              to="/admission"
              className="hover:bg-orange-500/15 px-3 py-1 rounded"
            >
              Admission
            </Link>
            <Link
              to="/resources"
              className="hover:bg-orange-500/15 px-3 py-1 rounded"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="hover:bg-orange-500/15 px-3 py-1 rounded"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signin"
              className="hover:bg-orange-500/15 px-3 py-1 rounded"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className=" bg-orange-400/30 text-gray-50 px-4 py-1 rounded-lg font-medium hover:bg-orange-50/30"
            >
              Sign Up
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
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:bg-orange-500/15 px-3 py-2 rounded">
                Home
              </Link>
              <Link
                to="/jobs"
                className="hover:bg-orange-500/15 px-3 py-2 rounded"
              >
                Jobs
              </Link>
              <Link
                to="/admit-card"
                className="hover:bg-orange-500/15 px-3 py-2 rounded"
              >
                Admit Card
              </Link>
              <Link
                to="/results"
                className="hover:bg-orange-500/15 px-3 py-2 rounded"
              >
                Results
              </Link>
              <Link
                to="/admission"
                className="hover:bg-orange-500/15 px-3 py-2 rounded"
              >
                Admission
              </Link>
              <Link
                to="/resources"
                className="hover:bg-orange-500/15 px-3 py-2 rounded"
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className="hover:bg-orange-500/15 px-3 py-2 rounded"
              >
                Contact
              </Link>
              <Link
                to="/signin"
                className="hover:bg-orange-500/15 px-3 py-2 rounded"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-white text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-50"
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
