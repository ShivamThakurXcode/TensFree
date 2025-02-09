import { FileText, Download, Search, Filter } from "lucide-react";
import { useState } from "react";

const AdmitCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cards = [
    { id: 1, title: "UPSC Civil Services Exam 2024", date: "March 15, 2024" },
    { id: 2, title: "UPSC Prelims 2024", date: "June 5, 2024" },
    { id: 3, title: "UPSC Mains 2024", date: "September 20, 2024" },
    { id: 4, title: "UPSC Interview 2024", date: "November 10, 2024" },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-transparent text-gray-300">
      <h1 className="text-3xl text-center my-5 font-bold mb-8">
        Download Admit Cards
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

      <div className="space-y-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="p-6 rounded-lg shadow-md mb-8 bg-white bg-clip-padding backdrop-filter mx-6 backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 border border-white/30"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600 mb-4">Exam Date: {card.date}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Available Now
                  </span>
                </div>
              </div>
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <button className="mt-4 flex items-center px-6 py-2 bg-orange-500/50 text-gray-50 rounded-md hover:bg-orange-50/30">
              <Download className="h-5 w-5 mr-2" />
              Download Admit Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmitCard;
