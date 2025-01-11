import React from "react";
import { FileText, Download } from "lucide-react";

const AdmitCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Download Admit Cards</h1>

      <div className="space-y-6">
        {[1, 2, 3].map((card) => (
          <div key={card} className="bg-transparent p-6 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  UPSC Civil Services Exam 2024
                </h2>
                <p className="text-gray-600 mb-4">Exam Date: March 15, 2024</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Available Now
                  </span>
                </div>
              </div>
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <button className="mt-4 flex items-center px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
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
