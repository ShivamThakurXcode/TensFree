import { Briefcase, Search, Filter } from "lucide-react";

const Jobs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Job Openings</h1>

      {/* Search and Filter Section */}
      <div className="bg-transparent p-6 rounded-lg shadow-md mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-white rounded-md">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {[1, 2, 3, 4, 5].map((job) => (
          <div
            key={job}
            className="bg-transparent p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Senior Software Engineer
                </h2>
                <p className="text-gray-600 mb-4">
                  TechCorp Solutions • New Delhi, India
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    Full-time
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Remote
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    5+ years
                  </span>
                </div>
              </div>
              <Briefcase className="h-6 w-6 text-indigo-600" />
            </div>
            <button className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
