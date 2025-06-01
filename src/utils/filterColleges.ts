import { College } from "../data/colleges";

export interface CollegeFilters {
  district?: string;
  course?: string;
  collegeType?: 'Government' | 'Private';
  minRating?: number;
  feeRange?: { min: number; max: number };
}

export interface RankedCollege extends College {
  priority: 'high' | 'medium' | 'low';
  probabilityPercentage: number;
}

export const filterColleges = (
  colleges: College[],
  rank: number,
  filters: CollegeFilters
): RankedCollege[] => {
  if (!rank) return [];

  // First, filter colleges based on user preferences
  const filteredColleges = colleges.filter((college) => {
    // Skip colleges without cutoff data for ranking comparison
    if (college.cutoff === undefined) return false;

    // Apply district filter if selected
    if (filters.district && college.district !== filters.district) {
      return false;
    }

    // Apply course filter if selected
    if (filters.course && !college.courses.includes(filters.course)) {
      return false;
    }

    // Apply college type filter if selected
    if (filters.collegeType && college.type !== filters.collegeType) {
      return false;
    }

    // Apply minimum rating filter if selected
    if (filters.minRating && college.googleRating < filters.minRating) {
      return false;
    }

    // Apply fee range filter if selected
    if (
      filters.feeRange &&
      (college.annualFee < filters.feeRange.min || college.annualFee > filters.feeRange.max)
    ) {
      return false;
    }

    return true;
  });

  // Calculate admission probability and categorize colleges
  return filteredColleges.map((college) => {
    let priority: 'high' | 'medium' | 'low';
    let probabilityPercentage: number;

    // Calculate probability based on rank vs cutoff
    // Lower rank number is better (rank 1 is the best)
    if (rank <= college.cutoff!) {
      // Student's rank is better than or equal to cutoff
      priority = 'high';
      probabilityPercentage = 100;
    } else if (rank <= college.cutoff! * 1.2) {
      // Student's rank is within 20% of cutoff
      priority = 'medium';
      probabilityPercentage = 75;
    } else if (rank <= college.cutoff! * 1.5) {
      // Student's rank is within 50% of cutoff
      priority = 'low';
      probabilityPercentage = 50;
    } else {
      // Very low chance
      priority = 'low';
      probabilityPercentage = 25;
    }

    return {
      ...college,
      priority,
      probabilityPercentage,
    };
  }).sort((a, b) => {
    // Sort by priority first (high > medium > low)
    if (a.priority !== b.priority) {
      return a.priority === 'high' ? -1 : a.priority === 'medium' && b.priority === 'low' ? -1 : 1;
    }
    
    // Then by probability percentage (higher first)
    if (a.probabilityPercentage !== b.probabilityPercentage) {
      return b.probabilityPercentage - a.probabilityPercentage;
    }
    
    // Then by Google rating (higher first)
    return b.googleRating - a.googleRating;
  });
};