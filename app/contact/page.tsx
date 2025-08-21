
'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentModal from '../../components/AppointmentModal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              <Link href="/contact" className="text-blue-600 font-semibold cursor-pointer whitespace-nowrap">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20reception%20area%20with%20comfortable%20seating%2C%20professional%20healthcare%20environment%2C%20welcoming%20contact%20center%2C%20bright%20medical%20facility%20interior%20with%20reception%20desk%20and%20waiting%20area&width=1920&height=600&seq=contact-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Get in touch with us to schedule an appointment or ask any questions about our healthcare services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We're here to help you with all your healthcare needs. Reach out to us through any of the methods below, and our friendly staff will be happy to assist you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4 mt-1">
                    <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinic Address</h3>
                    <p className="text-gray-700">
                      Plot No 44, Opposite United Church<br />
                      Nirmal Nagar Cross Road<br />
                      Sainikpuri - 500094<br />
                      Hyderabad, Telangana
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mr-4 mt-1">
                    <i className="ri-phone-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Number</h3>
                    <p className="text-gray-700">
                      <a href="tel:+919177344288" className="hover:text-blue-600 transition-colors">
                        +91 9177344288
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">Available during clinic hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mr-4 mt-1">
                    <i className="ri-mail-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@dhruvclinic.com" className="hover:text-blue-600 transition-colors">
                        info@dhruvclinic.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-lg mr-4 mt-1">
                    <i className="ri-time-line text-orange-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Working Hours</h3>
                    <div className="text-gray-700">
                      <p><strong>Monday - Saturday:</strong></p>
                      <p className="ml-4">10:00 AM - 2:00 PM</p>
                      <p className="ml-4">7:00 PM - 10:00 PM</p>
                      <p className="mt-2"><strong>Sunday:</strong> Closed</p>
                      <p className="mt-2 text-red-600"><strong>Emergency:</strong> 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
                  <i className="ri-alarm-warning-line mr-2"></i>
                  Emergency Contact
                </h3>
                <p className="text-red-700 mb-3">
                  For medical emergencies, please call us immediately or visit the nearest emergency room.
                </p>
                <p className="text-red-800 font-semibold">
                  Emergency Hotline: <a href="tel:+919177344288" className="underline">+91 9177344288</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                    <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none pr-8"
                    >
                      <option value="">Select a service</option>
                      <option value="pediatrics">Pediatric Care</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="general">General Consultation</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="vaccination">Vaccination</option>
                      <option value="health-checkup">Health Check-up</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical"
                    placeholder="Please describe your inquiry or appointment request..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={formData.message.length > 500}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in Sainikpuri, Hyderabad with easy access and parking facilities
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7234567890123!2d78.45678901234567!3d17.456789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSainikpuri%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl mx-auto mb-4">
                <i className="ri-car-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Parking Available</h3>
              <p className="text-gray-600">
                Ample parking space available for patients and visitors right at the clinic premises.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-xl mx-auto mb-4">
                <i className="ri-bus-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Public Transport</h3>
              <p className="text-gray-600">
                Easily accessible by public transportation with bus stops and metro stations nearby.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-xl mx-auto mb-4">
                <i className="ri-wheelchair-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Wheelchair accessible facilities with ramps and wide doorways for comfortable access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-3xl font-[\'Pacifico\'] text-white mb-4 inline-block">
                Dhruv Clinic
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
