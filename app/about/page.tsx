
'use client';

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from '../../components/AppointmentModal';

export default function About() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-[\'Pacifico\'] text-blue-600">
                logo
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold cursor-pointer whitespace-nowrap">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Professional%20medical%20team%20in%20white%20coats%20standing%20together%20in%20modern%20hospital%20corridor%2C%20healthcare%20professionals%2C%20medical%20staff%20portrait%2C%20clean%20clinical%20environment%20with%20medical%20equipment&width=1920&height=600&seq=about-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Dhruv Clinic</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Dedicated to providing exceptional healthcare with compassion and expertise for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dhruv Clinic was founded with a vision to provide comprehensive healthcare services that combine medical excellence with compassionate care. For over 15 years, we have been serving our community with dedication and expertise.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our clinic specializes in pediatric care and dermatology, offering a wide range of services from routine check-ups to advanced treatments. We believe in building long-term relationships with our patients and their families.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With state-of-the-art facilities and a team of experienced healthcare professionals, we ensure that every patient receives personalized attention and the highest quality medical care.
              </p>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20building%20exterior%20with%20professional%20architecture%2C%20clean%20white%20healthcare%20facility%2C%20medical%20center%20entrance%2C%20welcoming%20healthcare%20environment%2C%20contemporary%20medical%20building%20design&width=600&height=400&seq=clinic-building-001&orientation=landscape"
                alt="Dhruv Clinic Building"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-xl mb-6">
                <i className="ri-flag-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional healthcare services that improve the quality of life for our patients and their families. We are committed to delivering compassionate, evidence-based medical care in a welcoming and professional environment.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-xl mb-6">
                <i className="ri-eye-line text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading healthcare provider in our region, recognized for clinical excellence, innovative treatments, and outstanding patient care. We envision a healthier community where every individual has access to quality medical services.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              These fundamental principles guide everything we do at Dhruv Clinic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6">
                <i className="ri-heart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-700 leading-relaxed">
                We treat every patient with empathy, kindness, and respect, understanding that healthcare is deeply personal and sometimes challenging.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6">
                <i className="ri-award-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain the highest standards of medical care through continuous education, advanced technology, and evidence-based practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-700 leading-relaxed">
                We operate with honesty and transparency, building trust through ethical practices and clear communication with our patients.
              </p>
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Facilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art medical equipment and comfortable patient areas designed for your health and well-being
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mx-auto mb-4">
                  <i className="ri-microscope-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Advanced Diagnostics</h3>
                <p className="text-gray-600 text-sm">Modern diagnostic equipment for accurate assessments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mx-auto mb-4">
                  <i className="ri-hospital-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Patient Rooms</h3>
                <p className="text-gray-600 text-sm">Comfortable and hygienic examination rooms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mx-auto mb-4">
                  <i className="ri-flask-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Laboratory</h3>
                <p className="text-gray-600 text-sm">On-site lab for quick test results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mx-auto mb-4">
                  <i className="ri-first-aid-kit-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Care</h3>
                <p className="text-gray-600 text-sm">24/7 emergency medical services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule your appointment today and discover why thousands of patients trust Dhruv Clinic with their healthcare needs.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-3xl font-[\'Pacifico\'] text-white mb-4 inline-block">
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

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  );
}
