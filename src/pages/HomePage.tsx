import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Award, GraduationCap } from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-800 dark:to-emerald-950 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Find Your Perfect B.Tech College in Telangana
            </h1>
            <p className="text-lg md:text-xl mb-8 text-emerald-100">
              Get personalized college recommendations based on your TS EAMCET rank and preferences
            </p>
            <Link to="/college-finder">
              <Button 
  variant="secondary" 
  size="lg" 
  className="animate-pulse-slow text-black"
>
  Start Your College Search
</Button>

            </Link>
          </div>
        </div>
        
        {/* Wave SVG divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
          <svg className="w-full h-full" viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path 
              d="M0 0L60 5.4C120 10.8 240 21.6 360 27C480 32.4 600 32.4 720 27C840 21.6 960 10.8 1080 8.1C1200 5.4 1320 10.8 1380 13.5L1440 16.2V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V0Z" 
              fill="currentColor" 
              className="text-white dark:text-gray-900"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            How TSCollegeFinder Helps You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                  <Search className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                Rank-Based Recommendations
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Enter your TS EAMCET rank and get colleges categorized by admission probability - high, medium, or low chances.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Filter className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                Advanced Filtering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Refine your search with filters for district, branch, college type, Google rating, and fee range to find your perfect match.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                Quality Metrics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Compare colleges based on Google ratings, NAAC grades, NBA accreditation, and other essential quality indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Making College Selection Easier
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">30+</div>
              <p className="text-gray-600 dark:text-gray-400">B.Tech Colleges</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">15+</div>
              <p className="text-gray-600 dark:text-gray-400">Engineering Branches</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-400">Districts Covered</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-400">Free to Use</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 dark:from-purple-800 dark:to-purple-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-purple-200" />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Dream Engineering College?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-purple-100">
            Enter your TS EAMCET rank now and discover the best B.Tech colleges in Telangana that match your profile and preferences.
          </p>
          <Link to="/college-finder">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white hover:bg-gray-100 text-purple-900 font-semibold"
            >
              Start Searching Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;