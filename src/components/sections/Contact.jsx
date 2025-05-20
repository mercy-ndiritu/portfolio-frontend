import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please fill out this field.';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please fill out this field.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return; // don't submit if validation fails
  }

  try {
    const response = await fetch('https://portfolio-backend-ruby-ten.vercel.app/api/contact', {  // adjust URL as needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('Response:', JSON.stringify(data));

    if (response.ok && data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error('Error sending contact form:', error);
    alert("Oops! Something went wrong. Please try again.");
  }
};

  return (
    <section id="contact" className="py-20 px-4 md:px-12 lg:px-20">
    <div className="bg-gray-50 min-h-screen">
     
      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Information</h2>
            <p className="text-gray-600 mb-8">Fill up the form and I'll get back to you within 24 hours.</p>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-500">+254797919283</p>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-500">mewanjikundiritu@gmail.com</p>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
              
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black bg-white focus:ring-purple-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="flex items-center mt-1 text-red-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">{errors.name}</span>
                    </div>
                  )}
                </div>
                
                {/* Email Field */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 text-black bg-white focus:ring-purple-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="flex items-center mt-1 text-red-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm">{errors.email}</span>
                    </div>
                  )}
                </div>
                
                {/* Subject Field */}
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-600 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white py-3 px-4 rounded-md hover:bg-purple-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;