import React from 'react';
import { BookOpen, Filter, X } from 'lucide-react';
import CollegeCard from './CollegeCard';
import { RankedCollege } from '../../utils/filterColleges';
import { CollegeFilters } from '../../utils/filterColleges';
import { feeRanges } from '../../data/colleges';

interface CollegeListProps {
  colleges: RankedCollege[];
  filters: CollegeFilters;
  clearFilters: () => void;
}

const CollegeList: React.FC<CollegeListProps> = ({ colleges, filters, clearFilters }) => {
  // Group colleges by priority
  const highPriorityColleges = colleges.filter(college => college.priority === 'high');
  const mediumPriorityColleges = colleges.filter(college => college.priority === 'medium');
  const lowPriorityColleges = colleges.filter(college => college.priority === 'low');

  // Function to get the display name for a fee range
  const getFeeRangeName = (min: number, max: number) => {
    const range = feeRanges.find(range => range.min === min && range.max === max);
    return range ? range.label : `₹${min.toLocaleString('en-IN')} - ₹${max === Infinity ? 'Above' : max.toLocaleString('en-IN')}`;
  };

  // Check if any filters are applied
  const hasFilters = Object.keys(filters).length > 0;

  if (colleges.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
          <BookOpen className="h-8 w-8 text-gray-500 dark:text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No colleges found</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {hasFilters 
            ? "No colleges match your current filters. Try adjusting your search criteria."
            : "Please enter your TS EAMCET rank to find colleges."}
        </p>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <X className="h-4 w-4 mr-1" />
            Clear all filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Applied filters section */}
      {hasFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Filter className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Applied Filters</span>
            </div>
            <button
              onClick={clearFilters}
              className="text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.district && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                District: {filters.district}
                <button
                  onClick={() => {
                    const newFilters = { ...filters };
                    delete newFilters.district;
                    // Re-search with updated filters
                  }}
                  className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.course && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                Branch: {filters.course}
                <button
                  onClick={() => {
                    const newFilters = { ...filters };
                    delete newFilters.course;
                    // Re-search with updated filters
                  }}
                  className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.collegeType && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                Type: {filters.collegeType}
                <button
                  onClick={() => {
                    const newFilters = { ...filters };
                    delete newFilters.collegeType;
                    // Re-search with updated filters
                  }}
                  className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.minRating && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                Rating: {filters.minRating}+ Stars
                <button
                  onClick={() => {
                    const newFilters = { ...filters };
                    delete newFilters.minRating;
                    // Re-search with updated filters
                  }}
                  className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {filters.feeRange && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                Fee: {getFeeRangeName(filters.feeRange.min, filters.feeRange.max)}
                <button
                  onClick={() => {
                    const newFilters = { ...filters };
                    delete newFilters.feeRange;
                    // Re-search with updated filters
                  }}
                  className="ml-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        Found {colleges.length} colleges matching your criteria
      </div>

      {/* High Priority Colleges */}
      {highPriorityColleges.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            High Probability (100% chance in first phase)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highPriorityColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        </div>
      )}

      {/* Medium Priority Colleges */}
      {mediumPriorityColleges.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
            Medium Probability (75% chance in first phase)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediumPriorityColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        </div>
      )}

      {/* Low Priority Colleges */}
      {lowPriorityColleges.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
            <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
            Low Probability (50% or less chance in first phase)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lowPriorityColleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeList;