/* eslint-disable react/no-unescaped-entities */

import React from "react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Support Center
          </h1>
          
          <div className="space-y-6 text-lg text-gray-600">
            <p className="text-center">
              Need assistance? We're here to help!
            </p>
            
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <p className="mb-4">
                Contact us at
              </p>
              <a 
                href="mailto:support@rajscape.com"
                className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                support@rajscape.com
              </a>
              <p className="mt-4 text-sm text-gray-500">
                We aim to respond to all inquiries within 48 hours
              </p>
            </div>

            <div className="text-center text-sm text-gray-500 mt-8">
              <p className="mb-2">Operating hours: Monday to Friday, 9 AM - 5 PM EST</p>
              <p>
                <a 
                  href="https://apworld.rajscape.com/privacy-policy.html"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
