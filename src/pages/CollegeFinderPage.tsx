import React, { useState } from 'react';
import CollegeFinderForm from '../components/collegesFinder/CollegeFinderForm';
import CollegeList from '../components/collegesFinder/CollegeList';
import { colleges } from '../data/colleges';
import { filterColleges, CollegeFilters, RankedCollege } from '../utils/filterColleges';

const CollegeFinderPage: React.FC = () => {
  const [userRank, setUserRank] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<CollegeFilters>({});
  const [filteredColleges, setFilteredColleges] = useState<RankedCollege[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = (rank: number, filters: CollegeFilters) => {
    setUserRank(rank);
    setActiveFilters(filters);
    
    const results = filterColleges(colleges, rank, filters);
    setFilteredColleges(results);
    setHasSearched(true);
    
    // Scroll to results if any
    if (results.length > 0) {
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const clearFilters = () => {
    if (userRank) {
      setActiveFilters({});
      const results = filterColleges(colleges, userRank, {});
      setFilteredColleges(results);
    }
  };

  return (
    <main className="flex-1 bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <CollegeFinderForm onSearch={handleSearch} />
          
          {hasSearched && (
            <div id="results-section\" className="mt-8">
              <CollegeList 
                colleges={filteredColleges} 
                filters={activeFilters}
                clearFilters={clearFilters}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CollegeFinderPage;