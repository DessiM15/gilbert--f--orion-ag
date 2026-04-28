"use client";

import { useState, type FormEvent } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="quote" className="py-20 bg-tan/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-3">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6">
              We&apos;ve received your request. Our team will reach out to you
              shortly. For immediate assistance, give us a call.
            </p>
            <a
              href="tel:9568123583"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-dark font-bold px-8 py-3 rounded-full transition-colors"
            >
              Call (956) 812-3583
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-tan/40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">
            Get a <span className="text-gold-dark">Free Quote</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Fill out the form below and we&apos;ll get back to you with an
            estimate.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          {/* Name & Phone */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="(956) 555-1234"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>

          {/* Vehicle */}
          <div>
            <label htmlFor="vehicle" className="block text-sm font-semibold text-dark mb-1">
              Vehicle Year / Make / Model
            </label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="2022 Toyota Camry"
            />
          </div>

          {/* Service Needed */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-dark mb-1">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              <option value="">Select a service...</option>
              <option value="windshield-repair">Windshield Repair</option>
              <option value="window-replacement">Window Replacement</option>
              <option value="window-tint">Window Tint</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-dark mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-vertical"
              placeholder="Tell us about your needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-dark text-dark font-bold text-lg py-4 rounded-full transition-colors cursor-pointer"
          >
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  );
}
