import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';
import {
  districts,
  courses,
  collegeTypes,
  ratingOptions,
  feeRanges,
} from '../../data/colleges';
import { CollegeFilters } from '../../utils/filterColleges';

interface CollegeFinderFormProps {
  onSearch: (rank: number, filters: CollegeFilters) => void;
}

const CollegeFinderForm: React.FC<CollegeFinderFormProps> = ({ onSearch }) => {
  const [rank, setRank] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [course, setCourse] = useState<string>('');
  const [collegeType, setCollegeType] = useState<string>('');
  const [minRating, setMinRating] = useState<string>('');
  const [feeRange, setFeeRange] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearch = () => {
    // Validate rank input
    if (!rank.trim()) {
      setError('Please enter your TS EAMCET rank');
      return;
    }

    const rankNumber = parseInt(rank, 10);
    if (isNaN(rankNumber) || rankNumber <= 0) {
      setError('Please enter a valid rank');
      return;
    }

    setError('');

    // Build filters object
    const filters: CollegeFilters = {};

    if (district) {
      filters.district = district;
    }

    if (course) {
      filters.course = course;
    }

    if (collegeType) {
      filters.collegeType = collegeType as 'Government' | 'Private';
    }

    if (minRating) {
      filters.minRating = parseFloat(minRating);
    }

    if (feeRange) {
      const selectedRange = feeRanges.find(
        (range) => `${range.min}-${range.max}` === feeRange
      );
      if (selectedRange) {
        filters.feeRange = {
          min: selectedRange.min,
          max: selectedRange.max,
        };
      }
    }

    // Call parent component's search function
    onSearch(rankNumber, filters);
  };

  const resetFilters = () => {
    setDistrict('');
    setCourse('');
    setCollegeType('');
    setMinRating('');
    setFeeRange('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Find Your Perfect College
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Enter your TS EAMCET rank to discover colleges that match your profile
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input
              label="Your TS EAMCET Rank"
              placeholder="e.g., 15000"
              value={rank}
              onChange={setRank}
              type="number"
              min="1"
              error={error}
            />
          </div>
          <div className="md:self-end">
            <Button 
              onClick={handleSearch} 
              variant="primary"
              className="flex items-center"
              fullWidth
            >
              <Search className="h-4 w-4 mr-2" />
              Find Colleges
            </Button>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 underline underline-offset-2"
          >
            {showFilters ? 'Hide Filters' : 'Show Advanced Filters'}
          </button>
        </div>

        {showFilters && (
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg mt-2 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Select
                label="District"
                placeholder="Select District"
                options={[
                  { value: '', label: 'All Districts' },
                  ...districts.map(district => ({ value: district, label: district }))
                ]}
                value={district}
                onChange={setDistrict}
              />

              <Select
                label="Branch/Stream"
                placeholder="Select Branch"
                options={[
                  { value: '', label: 'All Branches' },
                  ...courses.map(course => ({ value: course, label: course }))
                ]}
                value={course}
                onChange={setCourse}
              />

              <Select
                label="College Type"
                placeholder="Select Type"
                options={[
                  { value: '', label: 'All Types' },
                  ...collegeTypes.map(type => ({ value: type, label: type }))
                ]}
                value={collegeType}
                onChange={setCollegeType}
              />

              <Select
                label="Minimum Google Rating"
                placeholder="Select Rating"
                options={[
                  { value: '', label: 'Any Rating' },
                  ...ratingOptions.map(rating => ({ 
                    value: rating.toString(), 
                    label: `${rating}+ Stars` 
                  }))
                ]}
                value={minRating}
                onChange={setMinRating}
              />

              <Select
                label="Fee Range"
                placeholder="Select Fee Range"
                options={[
                  { value: '', label: 'Any Fee Range' },
                  ...feeRanges.map(range => ({ 
                    value: `${range.min}-${range.max}`, 
                    label: range.label 
                  }))
                ]}
                value={feeRange}
                onChange={setFeeRange}
              />
            </div>

            <div className="mt-4 flex justify-end">
              <Button 
                onClick={resetFilters} 
                variant="outline" 
                size="sm"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeFinderForm;