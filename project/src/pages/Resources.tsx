import React from "react";
import { Book, FileText, Video, Download } from "lucide-react";

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Study Resources</h1>

      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-transparent p-6 rounded-lg shadow-md text-center">
          <Book className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Study Materials</h2>
          <p className="text-gray-600">
            Access comprehensive study guides and notes
          </p>
        </div>
        <div className="bg-transparent p-6 rounded-lg shadow-md text-center">
          <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Previous Papers</h2>
          <p className="text-gray-600">
            Practice with previous year question papers
          </p>
        </div>
        <div className="bg-transparent p-6 rounded-lg shadow-md text-center">
          <Video className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Video Lectures</h2>
          <p className="text-gray-600">Watch expert video explanations</p>
        </div>
      </div>

      {/* Latest Resources */}
      <h2 className="text-2xl font-semibold mb-6">Latest Resources</h2>
      <div className="space-y-6">
        {[1, 2, 3].map((resource) => (
          <div
            key={resource}
            className="bg-transparent p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  UPSC GS Paper Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete analysis of previous year papers with solutions
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    PDF Format
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Free
                  </span>
                </div>
              </div>
              <Download className="h-6 w-6 text-indigo-600" />
            </div>
            <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Download Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
