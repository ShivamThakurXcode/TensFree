import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-transparent p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-transparent p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">support@tensfree.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+91 1234567890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mr-3" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    123 Career Street, Education Hub,
                    <br />
                    New Delhi, India 110001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-transparent p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
