'use client'

import { useState } from "react"
import Image from 'next/image'
import contactImage from '../../../public/images/22.jpg'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Get form data
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value || "Not provided"
    const message = e.target.message.value

    // Replace with your WhatsApp number (in international format, e.g., +1234567890, without spaces or special characters)
    const whatsappNumber = "+918123688974" // Update this with your actual number
    
    // Construct the WhatsApp message
    const whatsappMessage = `📩 *New Contact Form Submission* 📩\n\n` +
    `*Name:* ${name}\n` +
    `*Email:* ${email}\n` +
    `*Phone:* ${phone}\n` +
    `*Message:*\n${message}\n\n` +
    `-------------------\n` +
    `Sent on: ${new Date().toLocaleString()}`;
    
    // WhatsApp URL (encode the message to handle special characters)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // Show success message
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Column */}
          <div className="relative h-64 md:h-auto">
            <Image
              src={contactImage}
              alt="Contact us"
              className="w-full h-full object-cover"
              placeholder="blur"
              quality={75}
            />
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply" />
          </div>

          {/* Form Column */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name" // Add name attribute for form data access
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address(optional) 
                </label>
                <input
                  id="email"
                  name="email" // Add name attribute
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number 
                </label>
                <input
                  id="phone"
                  name="phone" // Add name attribute
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message" // Add name attribute
                  placeholder="How can we help you?"
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y dark:bg-gray-700 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Send via WhatsApp
              </button>

              {formSubmitted && (
                <p className="text-sm text-green-500 text-center mt-4">
                  Redirecting to WhatsApp...
                </p>
              )}
              
              {!formSubmitted && (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                  We'll receive your message on WhatsApp
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}