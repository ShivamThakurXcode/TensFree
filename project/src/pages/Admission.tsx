import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Admission = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Admission Notifications</h1>

      <div className="space-y-6">
        {[1, 2, 3].map((admission) => (
          <div
            key={admission}
            className="bg-transparent   p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  IIT JEE Advanced 2024
                </h2>
                <p className="text-gray-600 mb-4">Last Date: April 30, 2024</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Applications Open
                  </span>
                  <span className="flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    30 days left
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Eligibility: 12th Pass with PCM</li>
                  <li>Application Fee: ₹1000</li>
                  <li>Mode: Online Examination</li>
                </ul>
              </div>
              <GraduationCap className="h-6 w-6 text-orange-600" />
            </div>
            <button className="w-full md:w-auto px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
