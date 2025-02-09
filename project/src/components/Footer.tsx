import { Link } from "react-router-dom";
import { Briefcase, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-transparent  text-white">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid border-t  border-gray-800 pt-10  grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8" />
              <span className="font-bold text-xl">TensFree</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your one-stop destination for job updates, exam notifications, and
              career resources.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/jobs" className="block text-gray-400 hover:text-white">
                Latest Jobs
              </Link>
              <Link
                to="/admit-card"
                className="block text-gray-400 hover:text-white"
              >
                Admit Cards
              </Link>
              <Link
                to="/results"
                className="block text-gray-400 hover:text-white"
              >
                Results
              </Link>
              <Link
                to="/admission"
                className="block text-gray-400 hover:text-white"
              >
                Admissions
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <div className="space-y-2">
              <Link
                to="/resources"
                className="block text-gray-400 hover:text-white"
              >
                Study Material
              </Link>
              <Link
                to="/resources"
                className="block text-gray-400 hover:text-white"
              >
                Previous Papers
              </Link>
              <Link
                to="/resources"
                className="block text-gray-400 hover:text-white"
              >
                Mock Tests
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white"
              >
                Help Center
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TensFree. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
