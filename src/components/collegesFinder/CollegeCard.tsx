import React from 'react';
import { ExternalLink, MapPin, Star } from 'lucide-react';
import { RankedCollege } from '../../utils/filterColleges';

interface CollegeCardProps {
  college: RankedCollege;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college }) => {
  const priorityColors = {
    high: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    low: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  };

  const formatFee = (fee: number) => {
    if (fee >= 100000) {
      return `₹${(fee / 100000).toFixed(2)} Lakh`;
    }
    return `₹${fee.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
            {college.name}
          </h3>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${priorityColors[college.priority]}`}>
            {college.probabilityPercentage}% Chance
          </span>
        </div>
        
        <div className="flex items-center mb-2 text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{college.city}, {college.district}</span>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded">
            <Star className="h-3.5 w-3.5 text-amber-500 mr-1" fill="currentColor" />
            <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
              {college.googleRating}
            </span>
          </div>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {college.type}
          </span>
          {college.naacGrade && (
            <>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                NAAC: {college.naacGrade}
              </span>
            </>
          )}
        </div>
        
        <div className="mb-3">
          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Courses:</p>
          <div className="flex flex-wrap gap-1.5">
            {college.courses.slice(0, 3).map((course, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              >
                {course}
              </span>
            ))}
            {college.courses.length > 3 && (
              <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                +{college.courses.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            {formatFee(college.annualFee)}/year
          </div>
          <a 
            href={college.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            <span>Website</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;