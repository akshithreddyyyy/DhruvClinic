
'use client';

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from '../../components/AppointmentModal';

export default function Services() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-[\'Pacifico\'] text-blue-600">
                Dhruv Clinic
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
              <div className="relative group">
                <button className="text-blue-600 font-semibold cursor-pointer whitespace-nowrap flex items-center">
                  Services
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/services" className="block px-4 py-2 text-blue-600 bg-blue-50 font-medium">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Modern%20medical%20services%20facility%20with%20advanced%20equipment%2C%20comprehensive%20healthcare%20center%2C%20medical%20examination%20rooms%2C%20professional%20healthcare%20services%2C%20clinical%20environment%20with%20medical%20instruments&width=1920&height=600&seq=services-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Medical Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive healthcare services delivered with expertise, compassion, and advanced medical technology
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Complete Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From preventive care to specialized treatments, we offer a full spectrum of medical services to meet your family's healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Pediatric Services */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-xl mr-4">
                  <i className="ri-heart-pulse-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Pediatric Care</h3>
                  <p className="text-blue-600 font-medium text-lg">Complete Child Healthcare</p>
                </div>
              </div>
              <div className="mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Happy%20pediatric%20doctor%20examining%20smiling%20child%20patient%20in%20colorful%20medical%20office%2C%20stethoscope%20examination%2C%20cheerful%20healthcare%20interaction%2C%20bright%20clinic%20environment%2C%20professional%20pediatric%20care%2C%20child-friendly%20medical%20setting&width=500&height=300&seq=pediatric-services-main&orientation=landscape"
                  alt="Pediatric Care Services"
                  className="rounded-lg object-cover w-full h-48 mb-6"
                />
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Comprehensive healthcare for infants, children, and adolescents from birth to 18 years. Our child-friendly environment and specialized approach ensure comfortable and effective medical care.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-3">
                    <i className="ri-shield-check-line text-blue-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Vaccinations</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-3">
                    <i className="ri-stethoscope-line text-blue-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Health Check-ups</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-3">
                    <i className="ri-microscope-line text-blue-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Diagnostics</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-3">
                    <i className="ri-heart-line text-blue-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Growth Monitoring</h4>
                </div>
              </div>
              <Link href="/services/pediatrics">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                  Learn More About Pediatrics
                </button>
              </Link>
            </div>

            {/* Dermatology Services */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-xl mr-4">
                  <i className="ri-skin-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Dermatology</h3>
                  <p className="text-purple-600 font-medium text-lg">Advanced Skin Care</p>
                </div>
              </div>
              <div className="mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20dermatologist%20examining%20patient%20skin%20with%20modern%20medical%20equipment%2C%20clean%20medical%20examination%20room%2C%20skincare%20treatment%2C%20aesthetic%20dermatology%20consultation%2C%20advanced%20dermatological%20procedures%2C%20medical%20spa%20environment&width=500&height=300&seq=dermatology-services-main&orientation=landscape"
                  alt="Dermatology Services"
                  className="rounded-lg object-cover w-full h-48 mb-6"
                />
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Comprehensive skin care services including medical dermatology, cosmetic procedures, and aesthetic treatments. Our advanced treatments address both medical and cosmetic skin concerns.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-3">
                    <i className="ri-drop-line text-purple-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Skin Treatments</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-3">
                    <i className="ri-sparkling-line text-purple-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Cosmetic Care</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-3">
                    <i className="ri-flask-line text-purple-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Advanced Therapy</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-3">
                    <i className="ri-magic-line text-purple-600 text-lg"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Aesthetic</h4>
                </div>
              </div>
              <Link href="/services/dermatology">
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                  Learn More About Dermatology
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* General Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Medical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting services that complement our specialized care to provide comprehensive healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-xl mb-6">
                <i className="ri-first-aid-kit-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Care</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                24/7 emergency medical services for urgent healthcare needs. Immediate care for accidents, injuries, and medical emergencies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-green-600 mr-2"></i>Immediate Medical Attention</li>
                <li className="flex items-center"><i className="ri-check-line text-green-600 mr-2"></i>Trauma Care</li>
                <li className="flex items-center"><i className="ri-check-line text-green-600 mr-2"></i>Stabilization Services</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-xl mb-6">
                <i className="ri-test-tube-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Laboratory Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Complete diagnostic laboratory services with quick turnaround times. Advanced testing for accurate diagnosis and treatment monitoring.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Blood Tests</li>
                <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Urine Analysis</li>
                <li className="flex items-center"><i className="ri-check-line text-orange-600 mr-2"></i>Microbiology Testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mb-6">
                <i className="ri-medicine-bottle-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">In-House Pharmacy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our own pharmacy provides convenient access to high-quality medications prescribed by our doctors, ensuring you get the best medication required for your treatment.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-blue-600 mr-2"></i>Quality Medications</li>
                <li className="flex items-center"><i className="ri-check-line text-blue-600 mr-2"></i>Prescription Management</li>
                <li className="flex items-center"><i className="ri-check-line text-blue-600 mr-2"></i>Medication Counseling</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-xl mb-6">
                <i className="ri-health-book-line text-teal-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Health Check-ups</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive preventive health screenings and annual check-ups to maintain optimal health and detect issues early.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-teal-600 mr-2"></i>Annual Physical Exams</li>
                <li className="flex items-center"><i className="ri-check-line text-teal-600 mr-2"></i>Health Screenings</li>
                <li className="flex items-center"><i className="ri-check-line text-teal-600 mr-2"></i>Preventive Care Plans</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-xl mb-6">
                <i className="ri-syringe-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vaccination Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Complete immunization programs for all ages. Following WHO and national guidelines for optimal protection against diseases.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-red-600 mr-2"></i>Childhood Vaccines</li>
                <li className="flex items-center"><i className="ri-check-line text-red-600 mr-2"></i>Adult Immunizations</li>
                <li className="flex items-center"><i className="ri-check-line text-red-600 mr-2"></i>Travel Vaccines</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-xl mb-6">
                <i className="ri-user-heart-line text-indigo-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Counseling</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Personalized health counseling and education to help patients make informed decisions about their healthcare journey.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-indigo-600 mr-2"></i>Health Education</li>
                <li className="flex items-center"><i className="ri-check-line text-indigo-600 mr-2"></i>Lifestyle Guidance</li>
                <li className="flex items-center"><i className="ri-check-line text-indigo-600 mr-2"></i>Treatment Support</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-100 rounded-xl mb-6">
                <i className="ri-phone-line text-pink-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Telemedicine</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Remote consultation services for follow-ups and non-emergency medical consultations from the comfort of your home.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center"><i className="ri-check-line text-pink-600 mr-2"></i>Video Consultations</li>
                <li className="flex items-center"><i className="ri-check-line text-pink-600 mr-2"></i>Follow-up Care</li>
                <li className="flex items-center"><i className="ri-check-line text-pink-600 mr-2"></i>Prescription Renewals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Care Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to healthcare that ensures you receive the best possible care from consultation to treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-6 relative">
                <i className="ri-calendar-check-line text-white text-3xl"></i>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule Appointment</h3>
              <p className="text-gray-700 leading-relaxed">
                Book your appointment through our easy online system or call our friendly staff to schedule your visit.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-6 relative">
                <i className="ri-user-heart-line text-white text-3xl"></i>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-800 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Initial Consultation</h3>
              <p className="text-gray-700 leading-relaxed">
                Meet with our healthcare professionals for a thorough evaluation and discussion of your health concerns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-6 relative">
                <i className="ri-stethoscope-line text-white text-3xl"></i>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-800 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diagnosis & Treatment</h3>
              <p className="text-gray-700 leading-relaxed">
                Receive accurate diagnosis using advanced medical technology and personalized treatment plans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-600 rounded-full mx-auto mb-6 relative">
                <i className="ri-heart-pulse-line text-white text-3xl"></i>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-800 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow-up Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Ongoing monitoring and support to ensure optimal recovery and long-term health maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule your appointment today and discover why thousands of patients choose Dhruv Clinic for their healthcare needs.
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
