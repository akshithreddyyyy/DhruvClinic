
'use client';

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from '../../components/AppointmentModal';

export default function Awards() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-[\'Pacifico\'] text-blue-600">
                <img src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/acb6fbe2f4f0017a4f2698437056d8ea.jfif" alt="Dhruv Clinic" className="h-10 w-auto" />
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
              <Link href="/from-our-doctors" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
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
              <Link href="/awards" className="text-blue-600 font-semibold cursor-pointer whitespace-nowrap">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Medical%20awards%20ceremony%20with%20trophies%20and%20certificates%2C%20healthcare%20excellence%20recognition%2C%20professional%20achievement%20display%2C%20medical%20accolades%20and%20honors%2C%20award%20presentation%20event&width=1920&height=600&seq=awards-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Awards & Recognition</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Celebrating our achievements in healthcare excellence and community service
            </p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from healthcare organizations and the community for our commitment to excellence
            </p>
          </div>

          {/* Major Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center bg-yellow-500 rounded-full mx-auto mb-6">
                <i className="ri-trophy-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Excellence Award</h3>
              <p className="text-gray-700 mb-4">Recognized for outstanding patient care and medical excellence in pediatric services.</p>
              <p className="text-sm text-gray-500 font-medium">Healthcare Quality Board • 2023</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-6">
                <i className="ri-medal-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Pediatric Clinic</h3>
              <p className="text-gray-700 mb-4">Awarded for exceptional pediatric care and child-friendly healthcare environment.</p>
              <p className="text-sm text-gray-500 font-medium">Medical Association of India • 2023</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-6">
                <i className="ri-star-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Choice Award</h3>
              <p className="text-gray-700 mb-4">Top-rated clinic based on patient satisfaction surveys and feedback scores.</p>
              <p className="text-sm text-gray-500 font-medium">Patient Advocacy Group • 2023</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-6">
                <i className="ri-heart-pulse-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Health Champion</h3>
              <p className="text-gray-700 mb-4">Recognized for community health initiatives and preventive care programs.</p>
              <p className="text-sm text-gray-500 font-medium">Health Ministry • 2022</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety Excellence Award</h3>
              <p className="text-gray-700 mb-4">Outstanding commitment to patient safety and infection control protocols.</p>
              <p className="text-sm text-gray-500 font-medium">Healthcare Safety Council • 2022</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 flex items-center justify-center bg-indigo-600 rounded-full mx-auto mb-6">
                <i className="ri-graduation-cap-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Innovation Award</h3>
              <p className="text-gray-700 mb-4">Recognition for implementing advanced medical technologies and treatment methods.</p>
              <p className="text-sm text-gray-500 font-medium">Medical Technology Board • 2021</p>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h3>
              <p className="text-xl text-gray-600">Our achievements in measurable terms</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Years of Excellence</h4>
                <p className="text-gray-600">Consistent quality healthcare delivery</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Happy Patients</h4>
                <p className="text-gray-600">Families we've served with care</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Success Rate</h4>
                <p className="text-gray-600">Treatment effectiveness rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">5★</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Patient Rating</h4>
                <p className="text-gray-600">Average patient satisfaction score</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Professional Certifications</h3>
              <p className="text-xl text-blue-100">Maintaining the highest standards of medical practice</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-hospital-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Medical Council Registration</h4>
                <p className="text-blue-100 text-sm">Licensed medical practitioners with valid registrations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Quality Assurance Certified</h4>
                <p className="text-blue-100 text-sm">Meets all healthcare quality and safety standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-award-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Specialty Board Certified</h4>
                <p className="text-blue-100 text-sm">Board certification in pediatrics and dermatology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience Award-Winning Healthcare</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied patients who have experienced our recognized excellence in medical care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
            <Link href="/testimonials">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Read Patient Reviews
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
              <Link href="/" className="text-3xl font-[\'Pacifico\'] text-white mb-4 inline-block">
                <img src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/acb6fbe2f4f0017a4f2698437056d8ea.jfif" alt="Dhruv Clinic" className="h-8 w-auto brightness-0 invert" />
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
