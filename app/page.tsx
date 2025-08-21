
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AppointmentModal from '../components/AppointmentModal';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const slides = [
    {
      tag: "Pediatrics",
      title: "Expert Pediatric Care",
      subtitle: "Compassionate healthcare for your little ones",
      description: "Comprehensive medical care for children from newborn to adolescence with experienced pediatric specialists.",
      backgroundImage: "https://readdy.ai/api/search-image?query=Modern%20pediatric%20clinic%20interior%20with%20child-friendly%20colorful%20decorations%2C%20professional%20medical%20environment%2C%20bright%20lighting%2C%20comfortable%20examination%20rooms%2C%20childrens%20healthcare%20facility%20with%20medical%20equipment%20and%20toys&width=1920&height=1080&seq=pediatric-hero-bg&orientation=landscape"
    },
    {
      tag: "Dermatology", 
      title: "Advanced Dermatology Services",
      subtitle: "Beautiful skin, confident you",
      description: "State-of-the-art dermatological treatments and aesthetic procedures for all your skin care needs.",
      backgroundImage: "https://readdy.ai/api/search-image?query=Clean%20modern%20dermatology%20clinic%20interior%20with%20advanced%20medical%20equipment%2C%20aesthetic%20treatment%20room%2C%20professional%20skincare%20facility%2C%20bright%20white%20medical%20environment%20with%20dermatology%20instruments&width=1920&height=1080&seq=dermatology-hero-bg&orientation=landscape"
    }
  ];

  useEffect(() => {
    if (!isClient) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isClient]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (!isClient) {
    return <div className="min-h-screen bg-white"></div>;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-[`Pacifico`] text-blue-600">
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
      <section className="relative h-screen overflow-hidden pt-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-blue-600/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-4">
                  <span className="text-blue-200 font-semibold">{slide.tag}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-4 font-medium">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setIsAppointmentModalOpen(true)}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Book Appointment
                  </button>
                  <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 rounded-full transition-colors cursor-pointer"
        >
          <i className="ri-arrow-left-line text-xl"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 rounded-full transition-colors cursor-pointer"
        >
          <i className="ri-arrow-right-line text-xl"></i>
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Our Clinic</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dhruv Clinic provides comprehensive healthcare services with a focus on pediatric care and dermatology. Our experienced medical professionals are dedicated to delivering exceptional patient care in a comfortable environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20medical%20clinic%20interior%20with%20professional%20doctors%20and%20nurses%2C%20clean%20white%20healthcare%20environment%2C%20medical%20equipment%2C%20welcoming%20reception%20area%2C%20professional%20healthcare%20team%20in%20white%20coats%2C%20bright%20and%20sterile%20medical%20facility&width=600&height=400&seq=clinic-about-001&orientation=landscape"
                alt="Dhruv Clinic Interior"
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What We Provide</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Medical Care</h4>
                    <p className="text-gray-600">Complete health assessments and preventive care for all ages</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Advanced Treatment Options</h4>
                    <p className="text-gray-600">State-of-the-art medical technology and treatment methods</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personalized Patient Care</h4>
                    <p className="text-gray-600">Individualized treatment plans tailored to each patient's needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full mr-4 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Emergency Support</h4>
                    <p className="text-gray-600">24/7 emergency care and urgent medical consultations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Lead Doctors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert medical care with years of experience and dedication to patient health
            </p>
          </div>
          
          {/* Dr. E N Purushothama Reddy */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Dr. E N Purushothama Reddy</h3>
                <p className="text-xl text-blue-600 font-medium mb-6">Pediatrician</p>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Dr. E N Purushothama Reddy is a highly experienced pediatrician with over 15 years of dedicated service in child healthcare. Known for his compassionate approach and excellent patient care, he has been serving families in the Sainikpuri area with distinction.
                  </p>
                  <p className="leading-relaxed">
                    He maintains a 5.0-star rating with 71 patient reviews, reflecting his commitment to providing exceptional pediatric care.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">5.0★</div>
                      <div className="text-sm text-gray-600">71 Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/29a282b8736d7eb08f34ec6316c0a933.jfif"
                    alt="Dr. E N Purushothama Reddy"
                    className="rounded-2xl shadow-xl object-cover w-80 h-96"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-stethoscope-line text-white text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Swetha Reddy */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://static.readdy.ai/image/8fcb1ffaa6f74c50cfac5144c953a981/4a37e7089d09908a1c8e9431e9708756.webp"
                    alt="Dr. Swetha Reddy"
                    className="rounded-2xl shadow-xl object-cover w-80 h-96"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <i className="ri-skin-line text-white text-3xl"></i>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Dr. Swetha Reddy</h3>
                <p className="text-xl text-purple-600 font-medium mb-6">Dermatologist & Cosmetologist</p>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Dr. Swetha Reddy is a skilled dermatologist and cosmetologist with 17 years of experience in healthcare, specializing in aesthetic medicine. She has received advanced training from Germany and provides expert care in dermatology and cosmetic treatments.
                  </p>
                  <p className="leading-relaxed">
                    With a 4.6★ rating from 35 patient reviews and a consultation fee of ₹300, she is recognized as one of the most promising dermatologists in Hyderabad.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">17+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">4.6★</div>
                      <div className="text-sm text-gray-600">35 Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert medical care in pediatrics and dermatology with cutting-edge treatments and compassionate service
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pediatric Care */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-xl mr-4">
                  <i className="ri-heart-pulse-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Pediatric Care</h3>
                  <p className="text-blue-600 font-medium">Children's Health Specialists</p>
                </div>
              </div>
              <div className="mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Happy%20pediatric%20doctor%20examining%20smiling%20child%20patient%20in%20colorful%20medical%20office%2C%20stethoscope%20examination%2C%20cheerful%20healthcare%20interaction%2C%20bright%20clinic%20environment%2C%20professional%20pediatric%20care%2C%20child-friendly%20medical%20setting&width=500&height=300&seq=pediatric-spec-001&orientation=landscape"
                  alt="Pediatric Care"
                  className="rounded-lg object-cover w-full h-48 mb-4"
                />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Comprehensive healthcare for infants, children, and adolescents. Our pediatric specialists provide preventive care, vaccinations, developmental screenings, and treatment for childhood illnesses in a child-friendly environment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-2">
                    <i className="ri-shield-check-line text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Vaccinations</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-2">
                    <i className="ri-stethoscope-line text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Check-ups</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-2">
                    <i className="ri-microscope-line text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Diagnostics</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-2">
                    <i className="ri-heart-line text-blue-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Wellness</h4>
                </div>
              </div>
              <Link href="/services/pediatrics">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                  Learn More About Pediatrics
                </button>
              </Link>
            </div>

            {/* Dermatology */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-xl mr-4">
                  <i className="ri-skin-line text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dermatology</h3>
                  <p className="text-purple-600 font-medium">Skin & Aesthetic Specialists</p>
                </div>
              </div>
              <div className="mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20dermatologist%20examining%20patient%20skin%20with%20modern%20medical%20equipment%2C%20clean%20medical%20examination%20room%2C%20skincare%20treatment%2C%20aesthetic%20dermatology%20consultation%2C%20advanced%20dermatological%20procedures%2C%20medical%20spa%20environment&width=500&height=300&seq=dermatology-spec-001&orientation=landscape"
                  alt="Dermatology Care"
                  className="rounded-lg object-cover w-full h-48 mb-4"
                />
                <p className="text-gray-700 leading-relaxed mb-6">
                  Advanced dermatological treatments for medical and cosmetic skin concerns. Our board-certified dermatologists offer comprehensive skin care services including medical dermatology, cosmetic procedures, and aesthetic treatments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-2">
                    <i className="ri-drop-line text-purple-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Skin Treatments</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-2">
                    <i className="ri-sparkling-line text-purple-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Cosmetic Care</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-2">
                    <i className="ri-flask-line text-purple-600"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">Advanced Therapy</h4>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-2">
                    <i className="ri-magic-line text-purple-600"></i>
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

      {/* Achievements Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Achievements</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Proud milestones that reflect our commitment to exceptional healthcare and patient satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4">15+</div>
                <h3 className="text-xl font-semibold text-white mb-2">Years of Experience</h3>
                <p className="text-blue-100 leading-relaxed">Serving the community with excellence</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4">1000+</div>
                <h3 className="text-xl font-semibold text-white mb-2">Happy Patients</h3>
                <p className="text-blue-100 leading-relaxed">Trusted by families across the region</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4">98%</div>
                <h3 className="text-xl font-semibold text-white mb-2">Success Rate</h3>
                <p className="text-blue-100 leading-relaxed">Outstanding treatment outcomes</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="text-5xl md:text-6xl font-bold text-white mb-4">24/7</div>
                <h3 className="text-xl font-semibold text-white mb-2">Emergency Care</h3>
                <p className="text-blue-100 leading-relaxed">Always here when you need us</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Recognition & Awards</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Dhruv Clinic has been recognized for excellence in healthcare delivery, patient satisfaction, and community service. Our dedication to providing quality medical care has earned us numerous accolades from healthcare organizations and patient advocacy groups.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full mx-auto mb-3">
                    <i className="ri-award-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-white">Excellence Award</h4>
                  <p className="text-blue-100 text-sm">Healthcare Quality 2023</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full mx-auto mb-3">
                    <i className="ri-medal-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-white">Patient Choice</h4>
                  <p className="text-blue-100 text-sm">Best Clinic 2023</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full mx-auto mb-3">
                    <i className="ri-star-line text-white text-2xl"></i>
                  </div>
                  <h4 className="font-semibold text-white">5-Star Rating</h4>
                  <p className="text-blue-100 text-sm">Patient Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from real patients who trust us with their healthcare needs
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20Indian%20mother%20smiling%2C%20warm%20and%20friendly%20expression%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20trustworthy%20appearance%2C%20healthcare%20patient%20testimonial%20style&width=100&height=100&seq=review-avatar-priya&orientation=squarish"
                  alt="Priya Sharma"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                  <i className="ri-star-fill text-yellow-400 text-xl"></i>
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                  "Exceptional pediatric care! Dr. E N Purushothama Reddy and the entire team made my children feel comfortable during their visits. The clinic is clean, modern, and the staff is incredibly professional. Highly recommend for any parent looking for quality healthcare."
                </blockquote>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-gray-600">Mother of 2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mb-12">
            <button className="w-3 h-3 rounded-full transition-colors cursor-pointer bg-blue-600"></button>
            <button className="w-3 h-3 rounded-full transition-colors cursor-pointer bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full transition-colors cursor-pointer bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full transition-colors cursor-pointer bg-gray-300"></button>
            <button className="w-3 h-3 rounded-full transition-colors cursor-pointer bg-gray-300"></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-heart-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassionate Care</h3>
              <p className="text-gray-600">
                We treat every patient with empathy, respect, and personalized attention to ensure comfort and peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Expertise</h3>
              <p className="text-gray-600">
                Our board-certified physicians bring years of experience and continuous education to provide the best care possible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-time-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Always Available</h3>
              <p className="text-gray-600">
                From routine check-ups to emergency care, we're here when you need us most with flexible scheduling and urgent care.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Choose Dhruv Clinic?</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                With over 15 years of excellence in healthcare, we combine advanced medical technology with compassionate care. Our specialized teams in pediatrics and dermatology are dedicated to providing comprehensive, personalized treatment that puts your health and well-being first. Join thousands of satisfied patients who trust us with their healthcare journey.
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
              <Link href="/" className="text-3xl font-[`Pacifico`] text-white mb-4 inline-block">
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
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                </div>
                <div className="text-sm pl-2">
                  <span>10:00 AM - 2:00 PM</span><br />
                  <span>7:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
                <div className="mt-4 text-sm">
                  <span className="text-red-400">Emergency: 24/7</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
                <li><Link href="/from-our-doctors" className="text-gray-400 hover:text-white transition-colors cursor-pointer">From Our Doctors</Link></li>
                <li><Link href="/services/pediatrics" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pediatrics</Link></li>
                <li><Link href="/services/dermatology" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Dermatology</Link></li>
                <li><Link href="/awards" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Awards</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Pediatric Care</span></li>
                <li><span className="text-gray-400">Vaccinations</span></li>
                <li><span className="text-gray-400">Skin Treatments</span></li>
                <li><span className="text-gray-400">Cosmetic Procedures</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-lg"></i>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-lg"></i>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-lg"></i>
                </div>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-lg"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm"> 2024 Dhruv Clinic. All rights reserved. Licensed Healthcare Provider.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</Link>
                <Link href="/hipaa" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">HIPAA Compliance</Link>
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
