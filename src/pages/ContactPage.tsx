import React from 'react';
import { Mail, Phone, MapPin, User, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <main className="flex-1 bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-4">
              <Mail className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Details and Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <User className="h-6 w-6 mr-2 text-emerald-600 dark:text-emerald-400" />
                  Founder Details
                </h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</h3>
                      <p className="text-base font-medium text-gray-900 dark:text-white">
                        Siddhardha Roy Mogilicharla
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                      <a 
                        href="mailto:mogilicharlasiddhardharoy@gmail.com" 
                        className="text-base font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >
                        mogilicharlasiddhardharoy@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                      <a 
                        href="tel:+919182408621" 
                        className="text-base font-medium text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >
                        +91 91824 08621
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                      <p className="text-base font-medium text-gray-900 dark:text-white">
                        Maisammaguda, Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Additional Resources
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://www.tsche.ac.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span>Telangana State Council of Higher Education</span>
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://tseamcet.nic.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span>TS EAMCET Official Website</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h2>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 text-base placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:text-gray-300 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 text-base placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:text-gray-300 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 text-base placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:text-gray-300 transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 px-3 text-base placeholder-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 dark:text-gray-300 transition-colors"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  How accurate are the admission probability predictions?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our predictions are based on historical TS EAMCET counseling data and previous cutoff trends. While we strive for accuracy, actual admission outcomes may vary based on factors like changes in seat allocation, reservation policies, and annual variations in cutoff ranks.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  How often is the college data updated?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We update our college database annually after the completion of TS EAMCET counseling to reflect the latest cutoff ranks and other relevant information.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Can I get personalized counseling assistance?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Currently, TSCollegeFinder offers algorithmic recommendations based on your rank and preferences. For personalized counseling, please contact us directly using the form above or via email.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Does TSCollegeFinder have any affiliation with colleges or TSCHE?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No, TSCollegeFinder is an independent platform created to help students make informed decisions. We are not affiliated with any educational institution or government body.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;