import React, { useEffect, useState } from 'react';

const JobOpeningCard = ({ title, type, location, experience, description, onViewDetails, onApply }) => {
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    // Check if user has already applied for this job
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const userEmail = JSON.parse(localStorage.getItem('user'))?.email;
    
    if (userEmail) {
      const hasAppliedForJob = applications.some(app => 
        app.jobTitle === title && app.applicant.personalEmail === userEmail
      );
      setHasApplied(hasAppliedForJob);
    }
  }, [title]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {type}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                {location}
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                {experience}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex space-x-3">
          <button
            onClick={onViewDetails}
            className="px-4 py-2 border border-gray-300 rounded-md text-[#00BBA7] hover:bg-gray-50 font-medium"
          >
            View Details
          </button>
          {hasApplied ? (
            <button
              className="px-4 py-2 bg-green-100 text-green-800 rounded-md font-medium cursor-default"
              disabled
            >
              ✓ Applied
            </button>
          ) : (
            <button
              onClick={onApply}
              className="px-4 py-2 bg-[#00BBA7] text-white rounded-md hover:bg-[#00BBA7] font-medium"
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobOpeningCard;