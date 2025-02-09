import { FaBriefcase, FaBuilding } from "react-icons/fa";

// Define the interface for JobCardProps
interface JobCardProps {
  jobTitle: string;
  organization: string;
  startDate: string;
  endDate: string;
  imageUrl?: string;
}

// Function to render the JobCard component
function JobCard({
  jobTitle,
  organization,
  startDate,
  endDate,
  imageUrl,
}: JobCardProps) {
  return (
    <div className="bg-white bg-clip-padding backdrop-filter mx-4 md:mx-6 backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 border border-white/30 rounded-lg py-5 px-7 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex divide-x divide-orange-100/30 divide flex-row items-center  w-full md:w-1/2">
          <img
            className="h-20 w-20 rounded-full shadow-[0px_10px_300px_10px_rgba(255,_165,_0,_0.48)]"
            src={imageUrl || "https://via.placeholder.com/150"}
            alt={organization}
          />
          <div className="ml-4 flex pl-4 lg:text-nowrap   flex-col">
            <p className="text-2xl flex gap-2 font-semibold text-white mt-2">
              <FaBriefcase /> {jobTitle}
            </p>
            <p className="text-sm flex gap-2 mt-2 text-gray-500">
              <FaBuilding /> {organization}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between  lg:w-[50%] mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500">Currently Open</p>
            <p className="text-sm mt-2 text-gray-500">
              Begin: {startDate} - Last Date: {endDate}
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-orange-500/50 text-gray-50 px-4 py-1 rounded font-medium hover:bg-orange-50/30">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
