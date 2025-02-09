import { Search, Filter } from "lucide-react";
import JobCard from "../components/job-card";

// Define the Job interface
interface Job {
  id: number;
  title: string;
  organization: string;
  startDate: string; // or Date, depending on your data
  endDate: string; // or Date, depending on your data
}
const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Assistant Engineer",
      organization: "Indian Railways",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      field: "Engineering",
      department: "Railway Board",
    },
    {
      id: 2,
      title: "Scientist",
      organization: "Indian Space Research Organisation (ISRO)",
      startDate: "2023-02-01",
      endDate: "2023-11-30",
      field: "Science and Technology",
      department: "Department of Space",
    },
    {
      id: 3,
      title: "Probationary Officer",
      organization: "State Bank of India",
      startDate: "2023-03-01",
      endDate: "2023-10-31",
      field: "Banking",
      department: "Ministry of Finance",
    },
    {
      id: 4,
      title: "Assistant Professor",
      organization: "University Grants Commission (UGC)",
      startDate: "2023-04-01",
      endDate: "2023-09-30",
      field: "Education",
      department: "Ministry of Education",
    },
    {
      id: 5,
      title: "Sub-Inspector",
      organization: "Central Reserve Police Force (CRPF)",
      startDate: "2023-05-01",
      endDate: "2023-08-31",
      field: "Law Enforcement",
      department: "Ministry of Home Affairs",
    },
    {
      id: 6,
      title: "Junior Engineer",
      organization: "Central Public Works Department (CPWD)",
      startDate: "2023-06-01",
      endDate: "2023-07-31",
      field: "Engineering",
      department: "Ministry of Housing and Urban Affairs",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent  text-gray-300">
      <h1 className="text-3xl text-center my-5 font-bold mb-8">
        Latest Job Openings
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

      {/* Job Listings */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            jobTitle={job.title}
            organization={job.organization}
            startDate={job.startDate}
            endDate={job.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
