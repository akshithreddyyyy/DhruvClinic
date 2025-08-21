
'use client';

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from '../../components/AppointmentModal';

export default function FromOurDoctors() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-['Pacifico'] text-blue-600">
                logo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                About Us
              </Link>
              <Link href="/doctors" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Our Doctors
              </Link>
              <Link href="/from-our-doctors" className="text-blue-600 font-semibold cursor-pointer whitespace-nowrap">
                From Our Doctors
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap flex items-center">
                  Services
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    All Services
                  </Link>
                  <Link href="/services/pediatrics" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Pediatrics
                  </Link>
                  <Link href="/services/dermatology" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Dermatology
                  </Link>
                </div>
              </div>
              <Link href="/awards" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Awards
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Patient Reviews
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Contact Us
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsAppointmentModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap flex items-center"
              >
                <i className="ri-calendar-line mr-2"></i>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-96 pt-16" 
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Compassionate%20doctors%20talking%20with%20patients%2C%20medical%20consultation%20scene%2C%20healthcare%20professionals%20discussing%20treatment%2C%20warm%20medical%20interaction%2C%20doctor-patient%20communication&width=1920&height=600&seq=from-doctors-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">From Our Doctors</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover what drives our medical team's passion for healing and their commitment to exceptional patient care
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why We're Passionate About Medicine</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our doctors share their personal motivations and the driving forces behind their dedication to healthcare
            </p>
          </div>

          {/* Dr. E N Purushothama Reddy's Message */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/29a282b8736d7eb08f34ec6316c0a933.jfif"
                  alt="Dr. E N Purushothama Reddy"
                  className="rounded-2xl shadow-xl object-cover w-full h-80"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Dr. E N Purushothama Reddy</h3>
                <p className="text-xl text-blue-600 font-medium mb-6">Pediatrician</p>
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "My passion for pediatric medicine stems from the incredible resilience and joy that children bring to the world. Every child deserves the best possible start in life, and being able to contribute to their health and wellbeing is not just my profession—it's my calling."
                </blockquote>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="ri-heart-line text-blue-600 mr-3 mt-1"></i>
                    <p className="text-gray-700">
                      <strong>Compassionate Care:</strong> I believe in treating not just the condition, but the whole child and their family with empathy and understanding.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-lightbulb-line text-blue-600 mr-3 mt-1"></i>
                    <p className="text-gray-700">
                      <strong>Continuous Learning:</strong> With over 15 years of experience, I'm committed to staying at the forefront of pediatric care to provide the best treatments.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-team-line text-blue-600 mr-3 mt-1"></i>
                    <p className="text-gray-700">
                      <strong>Family Partnership:</strong> I work closely with parents to educate and empower them in their child's healthcare journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Swetha Reddy's Message */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Dr. Swetha Reddy</h3>
                <p className="text-xl text-purple-600 font-medium mb-6">Dermatologist & Cosmetologist</p>
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "Dermatology is more than treating skin conditions—it's about helping people feel confident and beautiful in their own skin. With 17 years of experience and advanced training from Germany, I combine medical expertise with aesthetic artistry to provide comprehensive skin care."
                </blockquote>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="ri-user-heart-line text-purple-600 mr-3 mt-1"></i>
                    <p className="text-gray-700">
                      <strong>Patient-Centered Approach:</strong> I focus on understanding each patient's individual skin concerns and aesthetic goals to provide personalized care.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-shield-check-line text-purple-600 mr-3 mt-1"></i>
                    <p className="text-gray-700">
                      <strong>Advanced Techniques:</strong> My international training from Germany allows me to offer cutting-edge dermatological and cosmetic treatments.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-medicine-bottle-line text-purple-600 mr-3 mt-1"></i>
                    <p className="text-gray-700">
                      <strong>Holistic Skin Health:</strong> I believe in combining medical dermatology with aesthetic medicine to achieve optimal skin health and beauty.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/4a37e7089d09908a1c8e9431e9708756.webp"
                  alt="Dr. Swetha Reddy"
                  className="rounded-2xl shadow-xl object-cover w-full h-80"
                />
              </div>
            </div>
          </div>

          {/* Shared Values */}
          <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Shared Medical Philosophy</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                What unites our medical team in providing exceptional healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-green-600 rounded-2xl mx-auto mb-6">
                  <i className="ri-heart-pulse-line text-white text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Excellence in Care</h4>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to maintaining the highest standards of medical practice, continuously improving our skills and knowledge to serve our patients better.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-green-600 rounded-2xl mx-auto mb-6">
                  <i className="ri-community-line text-white text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Community Impact</h4>
                <p className="text-gray-700 leading-relaxed">
                  We believe in giving back to our community through health education, preventive care programs, and making healthcare accessible to all families in Sainikpuri.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 flex items-center justify-center bg-green-600 rounded-2xl mx-auto mb-6">
                  <i className="ri-graduation-cap-line text-white text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Lifelong Learning</h4>
                <p className="text-gray-700 leading-relaxed">
                  Medicine is constantly evolving, and we stay current with the latest research and treatments to provide the most effective care possible to our patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience Passionate Healthcare</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule an appointment with our dedicated medical team and discover the difference passionate healthcare can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
            <Link href="/doctors">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Meet Our Doctors
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-3xl font-['Pacifico'] text-white mb-4 inline-block">
                logo
              </Link>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Providing exceptional pediatric and dermatological care with compassion and expertise. Your health is our priority.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start text-gray-400">
                  <i className="ri-map-pin-line mr-3 mt-1 text-blue-400"></i>
                  <span>Plot No 44, Opposite United Church<br />Nirmal Nagar Cross Road, Sainikpuri-500094</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <i className="ri-phone-line mr-3 text-blue-400"></i>
                  <span>+91 9177344288</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <i className="ri-mail-line mr-3 text-blue-400"></i>
                  <span>info@dhruvclinic.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
              <div className="space-y-2 text-gray-400">
                <div>
                  <span>Monday - Saturday:</span><br />
                  <span className="text-sm pl-2">10:00 AM - 2:00 PM<br />7:00 PM - 10:00 PM</span>
                </div>
                <div className="pt-2">
                  <span>Sunday: Closed</span>
                </div>
                <div className="mt-4 text-sm">
                  <span className="text-red-400">Emergency: 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm"> 2024 Dhruv Clinic. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}