import React from "react";
import { CheckCircle, Search } from "lucide-react";

const Results = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Examination Results</h1>

      {/* Search Section */}
      <div className="bg-transparent p-6 rounded-lg shadow-md mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search results by exam name or roll number..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-6">
        {[1, 2, 3].map((result) => (
          <div key={result} className="bg-transparent p-6 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  SSC CGL Tier I Results 2024
                </h2>
                <p className="text-gray-600 mb-4">
                  Declaration Date: February 28, 2024
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Results Declared
                  </span>
                </div>
              </div>
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Check Result
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
