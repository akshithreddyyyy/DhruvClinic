
'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentModal from '../../components/AppointmentModal';

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of 2",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20Indian%20mother%20smiling%2C%20warm%20and%20friendly%20expression%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20trustworthy%20appearance%2C%20healthcare%20patient%20testimonial%20style&width=100&height=100&seq=review-avatar-priya&orientation=squarish",
      rating: 5,
      text: "Exceptional pediatric care! Dr. Purushothama Reddy and the entire team made my children feel comfortable during their visits. The clinic is clean, modern, and the staff is incredibly professional. Highly recommend for any parent looking for quality healthcare."
    },
    {
      name: "Rajesh Kumar",
      role: "Father of 3",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Indian%20father%20smiling%20confidently%2C%20business%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20trustworthy%20appearance%2C%20healthcare%20patient%20testimonial%20style&width=100&height=100&seq=review-avatar-rajesh&orientation=squarish",
      rating: 5,
      text: "Dr. Swetha's dermatology expertise helped resolve my daughter's skin condition completely. Her approach was gentle, thorough, and the results exceeded our expectations. The clinic's atmosphere is very welcoming for children."
    },
    {
      name: "Meera Patel",
      role: "Working Mother",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Indian%20working%20mother%2C%20confident%20smile%2C%20professional%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20trustworthy%20appearance%2C%20healthcare%20patient%20testimonial%20style&width=100&height=100&seq=review-avatar-meera&orientation=squarish",
      rating: 5,
      text: "The convenience of having both pediatric and dermatology services under one roof is amazing. Both doctors are incredibly knowledgeable and caring. My whole family receives excellent care here."
    },
    {
      name: "Arun Reddy",
      role: "IT Professional",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Indian%20IT%20professional%2C%20friendly%20smile%2C%20casual%20business%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20trustworthy%20appearance%2C%20healthcare%20patient%20testimonial%20style&width=100&height=100&seq=review-avatar-arun&orientation=squarish",
      rating: 5,
      text: "Dr. Purushothama Reddy's attention to detail and patient care is outstanding. He takes time to explain everything clearly and ensures we're comfortable with the treatment plan. Truly appreciate the personalized care."
    },
    {
      name: "Lakshmi Devi",
      role: "Grandmother",
      image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20elderly%20Indian%20grandmother%2C%20warm%20smile%2C%20traditional%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20trustworthy%20appearance%2C%20healthcare%20patient%20testimonial%20style&width=100&height=100&seq=review-avatar-lakshmi&orientation=squarish",
      rating: 5,
      text: "I've been bringing my grandchildren here for years. The doctors are not only skilled but also show genuine care for each child. The staff remembers us and makes every visit pleasant. Excellent service!"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              <Link href="/awards" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Awards
              </Link>
              <Link href="/testimonials" className="text-blue-600 font-semibold cursor-pointer whitespace-nowrap">
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Happy%20patients%20and%20families%20in%20medical%20clinic%20waiting%20area%2C%20satisfied%20healthcare%20customers%2C%20positive%20patient%20experiences%2C%20healthcare%20testimonials%20scene%2C%20welcoming%20medical%20environment&width=1920&height=600&seq=testimonials-hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Patient Reviews</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Real experiences from real families who trust us with their healthcare needs
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Genuine feedback from families who have experienced our compassionate healthcare
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 mb-12 relative">
            <div className="max-w-4xl mx-auto text-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-2xl mx-1"></i>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div>
                <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-blue-600 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-blue-600 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">All Patient Reviews</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through all the wonderful feedback from our patient community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Average Rating</h4>
              <p className="text-gray-600">Based on patient reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Happy Patients</h4>
              <p className="text-gray-600">Families served with care</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Rate</h4>
              <p className="text-gray-600">Patient satisfaction score</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Years Excellence</h4>
              <p className="text-gray-600">Consistent quality care</p>
            </div>
          </div>

          {/* Review Highlights */}
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Patients Choose Us</h3>
              <p className="text-xl text-blue-100">Common themes from our patient feedback</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-heart-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Compassionate Care</h4>
                <p className="text-blue-100 text-sm">Patients consistently praise our empathetic and caring approach to healthcare</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-user-smile-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Child-Friendly Environment</h4>
                <p className="text-blue-100 text-sm">Parents love how comfortable and welcomed their children feel during visits</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-stethoscope-line text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold mb-2">Expert Medical Care</h4>
                <p className="text-blue-100 text-sm">High-quality treatment outcomes and professional medical expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Happy Patient Family</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Experience the same exceptional care that our patients rave about. Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Appointment
            </button>
            <Link href="/doctors">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
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
