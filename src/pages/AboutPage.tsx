import React from 'react';
import { Info, Search, Filter, Award, GraduationCap, School } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="flex-1 bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
              <Info className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About TSCollegeFinder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Helping Telangana students make informed decisions about their engineering education
            </p>
          </div>

          {/* Mission Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-emerald-600 dark:text-emerald-400" />
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              TSCollegeFinder was created with a simple mission: to simplify the college selection process 
              for engineering aspirants in Telangana. We understand that choosing the right B.Tech college 
              is a crucial decision that can shape your future career prospects.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our platform provides personalized college recommendations based on your TS EAMCET rank and 
              preferences, helping you identify institutions where you have high, medium, or low chances 
              of admission. By combining rank-based predictions with quality metrics like Google ratings, 
              NAAC grades, and fee information, we enable you to make informed decisions about your 
              engineering education.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Search className="h-6 w-6 mr-2 text-emerald-600 dark:text-emerald-400" />
              How It Works
            </h2>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Enter Your TS EAMCET Rank
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start by providing your TS EAMCET rank in the College Finder page.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Apply Filters (Optional)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Refine your search by selecting district, branch, college type, minimum Google rating, or fee range.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Review Categorized Recommendations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Get personalized college recommendations categorized by admission probability:
                  </p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>High Priority: 100% admission chance in the first phase</li>
                    <li>Medium Priority: 75% chance in the first phase, 100% in the second</li>
                    <li>Low Priority: 50% chance in the first phase, increasing in subsequent phases</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                    Explore College Details
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    View comprehensive information about each college, including location, Google rating, courses offered, annual tuition fees, and official website links.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sources Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <School className="h-6 w-6 mr-2 text-emerald-600 dark:text-emerald-400" />
              Our Data
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              The college data on TSCollegeFinder is compiled from various reliable sources, including:
            </p>
            <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Official university and college websites</li>
              <li>TS EAMCET counseling data from previous years</li>
              <li>Telangana State Council of Higher Education (TSCHE)</li>
              <li>Google Maps ratings and reviews</li>
              <li>National Assessment and Accreditation Council (NAAC)</li>
              <li>National Board of Accreditation (NBA)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              We strive to maintain accurate and up-to-date information. However, we recommend verifying critical details directly with the respective institutions before making decisions.
            </p>
          </section>

          {/* Disclaimer Section */}
          <section className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-300 mb-2">
              Disclaimer
            </h2>
            <p className="text-amber-700 dark:text-amber-400 text-sm">
              The admission probability predictions are based on historical TS EAMCET counseling data and are intended as guidance only. Actual admission outcomes may vary based on numerous factors, including changes in seat allocation, reservation policies, and annual variations in cutoff ranks. TSCollegeFinder does not guarantee admission to any institution.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;