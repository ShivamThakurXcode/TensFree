import { CheckCircle, Search, Filter } from "lucide-react";

const Results = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent text-gray-300">
      <h1 className="text-3xl text-center my-5 font-bold mb-8">
        Examination Results
      </h1>

      {/* Search and Filter Section */}

      <div className=" bg-opacity-50 p-6 rounded-lg shadow-md mb-8 ">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 border border-white/30 rounded-md backdrop-blur-sm bg-orange-900/20 bg-opacity-50 text-gray-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-600 bg-opacity-50 rounded-md">
            <Filter className="h-5 w-5 mr-2 text-gray-500" />
            Filters
          </button>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-6">
        {[1, 2, 3].map((result) => (
          <div
            key={result}
            className="bg-white bg-clip-padding backdrop-filter mx-6 backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 border border-white/30 rounded-lg py-5 px-7"
          >
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
            <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
              Check Result
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
