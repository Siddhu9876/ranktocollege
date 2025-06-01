import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-xl mb-4">
              <GraduationCap className="h-6 w-6" />
              <span>TSCollegeFinder</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Helping Telangana students find the perfect B.Tech college based on their TS EAMCET rank and preferences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/college-finder" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm">
                  College Finder
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.tsche.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <span>TSCHE</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tseamcet.nic.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <span>TS EAMCET</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://jntuh.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <span>JNTUH</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.osmania.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <span>Osmania University</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">Maisammaguda, Hyderabad, Telangana, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a 
                  href="mailto:mogilicharlasiddhardharoy@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm"
                >
                  mogilicharlasiddhardharoy@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a 
                  href="tel:+919182408621" 
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm"
                >
                  +91 91824 08621
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} TSCollegeFinder. Created by Siddhardha Roy Mogilicharla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;