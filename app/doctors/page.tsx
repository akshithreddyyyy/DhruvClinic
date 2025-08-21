
'use client';

import Link from 'next/link';
import { useState } from 'react';
import AppointmentModal from '../../components/AppointmentModal';

export default function Doctors() {
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
              <Link href="/doctors" className="text-blue-600 font-semibold cursor-pointer whitespace-nowrap">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Professional%20medical%20doctors%20in%20white%20coats%20with%20stethoscopes%2C%20healthcare%20team%20portrait%2C%20medical%20professionals%20in%20hospital%20setting%2C%20confident%20physicians%2C%20clinical%20environment&width=1920&height=600&seq=doctors-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Medical Team</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Meet our experienced healthcare professionals dedicated to your health and well-being
            </p>
          </div>
        </div>
      </section>

      {/* Dr. E N Purushothama Reddy Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lead Pediatrician</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pediatric specialist brings decades of experience and expertise to provide exceptional child healthcare
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Dr. E N Purushothama Reddy</h3>
                <p className="text-2xl text-blue-600 font-medium mb-6">Pediatrician</p>
                <div className="space-y-4 text-gray-700 mb-8">
                  <p className="text-lg leading-relaxed">
                    Dr. E N Purushothama Reddy is a highly experienced pediatrician with over 15 years of dedicated service in child healthcare. Known for his compassionate approach and excellent patient care, he has been serving families in the Sainikpuri area with distinction.
                  </p>
                  <p className="text-lg leading-relaxed">
                    He maintains a 5.0-star rating with 71 patient reviews, reflecting his unwavering commitment to providing exceptional pediatric care and establishing lasting relationships with families.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">5.0★</div>
                    <div className="text-sm text-gray-600">71 Reviews</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                    <div className="text-sm text-gray-600">Treatments</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Child Health & Development</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Vaccination & Immunization</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Newborn Care</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Adolescent Medicine</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Emergency Pediatric Care</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">SIDS Prevention</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/29a282b8736d7eb08f34ec6316c0a933.jfif"
                    alt="Dr. E N Purushothama Reddy"
                    className="rounded-2xl shadow-xl object-cover w-96 h-[500px]"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-stethoscope-line text-white text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Achievements for Dr. Purushothama */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-service-line text-blue-600 mr-3"></i>
                Services & Treatment Specialties
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pediatric Critical Care</h4>
                    <p className="text-gray-600 text-sm">Emergency and intensive care for children</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Children Nutrition</h4>
                    <p className="text-gray-600 text-sm">Nutritional guidance and dietary planning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sudden Infant Death Syndrome (SIDS)</h4>
                    <p className="text-gray-600 text-sm">Prevention and education programs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Child And Adolescent Problems</h4>
                    <p className="text-gray-600 text-sm">Behavioral and developmental concerns</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Restless Child Disorder</h4>
                    <p className="text-gray-600 text-sm">Sleep and attention disorder management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-award-line text-blue-600 mr-3"></i>
                Achievements & Recognition
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-trophy-line text-yellow-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence in Pediatric Care Award 2023</h4>
                    <p className="text-gray-600 text-sm">Recognized for outstanding patient care</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-heart-line text-red-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">1000+ Successful Treatments</h4>
                    <p className="text-gray-600 text-sm">Milestone in pediatric healthcare delivery</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-user-heart-line text-purple-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Patient Choice Award 2022</h4>
                    <p className="text-gray-600 text-sm">Voted by patients and families</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-star-line text-yellow-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">5.0★ Rating with 71 Reviews</h4>
                    <p className="text-gray-600 text-sm">Consistent excellence in patient satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Swetha Reddy Profile */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dermatology Specialist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dermatologist combines advanced training with aesthetic expertise for comprehensive skin care
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/4a37e7089d09908a1c8e9431e9708756.webp"
                    alt="Dr. Swetha Reddy"
                    className="rounded-2xl shadow-xl object-cover w-96 h-[500px]"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-skin-line text-white text-3xl"></i>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-4xl font-bold text-gray-900 mb-4">Dr. Swetha Reddy</h3>
                <p className="text-2xl text-purple-600 font-medium mb-6">Dermatologist & Cosmetologist</p>
                <p className="text-lg text-gray-600 mb-6">MBBS, MD (Dermatology), Advanced Aesthetics Training</p>
                <div className="space-y-4 text-gray-700 mb-8">
                  <p className="text-lg leading-relaxed">
                    Dr. Swetha Reddy is a skilled dermatologist and cosmetologist with 17 years of experience in healthcare, specializing in aesthetic medicine. Located in Sainikpuri, Hyderabad, she has received advanced training from Germany.
                  </p>
                  <p className="text-lg leading-relaxed">
                    She provides expert care in dermatology and cosmetic treatments with a 4.6★ rating from 35 patient reviews and maintains a consultation fee of ₹300. Recognized as the "Most Promising Dermatologist from Hyderabad 2016".
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">17+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">4.6★</div>
                    <div className="text-sm text-gray-600">35 Reviews</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">₹300</div>
                    <div className="text-sm text-gray-600">Consultation</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Cosmetology</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Aesthetic Medicine</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Dermatological Treatments</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Cosmetic Procedures</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Skin Care & Anti-Aging</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Advanced Laser Treatments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Achievements for Dr. Swetha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-graduation-cap-line text-purple-600 mr-3"></i>
                Education & Training
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">MBBS - Bachelor of Medicine</h4>
                  <p className="text-gray-600">Medical Council of India Registration: 72356-MCI-2001</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">MD - Dermatology</h4>
                  <p className="text-gray-600">Specialized training in dermatological sciences</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Advanced Aesthetics Training</h4>
                  <p className="text-gray-600">Advanced training from Germany</p>
                  <p className="text-sm text-gray-500">International certification in aesthetic procedures</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-award-line text-purple-600 mr-3"></i>
                Achievements & Recognition
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-trophy-line text-yellow-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Most Promising Dermatologist from Hyderabad 2016</h4>
                    <p className="text-gray-600 text-sm">Regional recognition for excellence in dermatology</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-global-line text-blue-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">International Training Certification</h4>
                    <p className="text-gray-600 text-sm">Advanced training from Germany in aesthetic medicine</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-star-line text-yellow-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">4.6★ Patient Rating</h4>
                    <p className="text-gray-600 text-sm">Consistent patient satisfaction with 35 reviews</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-shield-check-line text-green-500 mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">17 Years Healthcare Experience</h4>
                    <p className="text-gray-600 text-sm">Extensive experience in dermatology and cosmetology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Schedule Your Appointment Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience expert medical care with our dedicated doctors specializing in pediatrics and dermatology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Call Us: +91 9177344288
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