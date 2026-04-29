"use client";

import { useState, type FormEvent } from "react";
import { useInView } from "../hooks/useInView";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, isInView } = useInView(0.1);

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
            <h3 className="text-3xl font-black text-dark mb-3 uppercase">
              Thank You!
            </h3>
            <p className="text-gray-700 mb-6 text-lg font-medium">
              We&apos;ve received your request. Our team will reach out to you
              shortly. For immediate assistance, give us a call.
            </p>
            <a
              href="tel:9568123583"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-dark font-black px-8 py-3 rounded-full transition-colors uppercase"
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
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 ${isInView ? "animate-fade-in-up" : "animate-hidden"}`}>
          <h2 className="text-4xl sm:text-5xl font-black text-dark uppercase">
            Get a <span className="text-gold-dark">Free Quote</span>
          </h2>
          <p className="mt-4 text-gray-700 text-xl font-medium">
            Fill out the form below and we&apos;ll get back to you with an
            estimate.
          </p>
        </div>

        <div className={`grid lg:grid-cols-5 gap-8 items-start ${isInView ? "animate-fade-in-up delay-200" : "animate-hidden"}`}>
          {/* Form — 3 columns */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 space-y-6 border-t-4 border-gold"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-shadow"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-shadow"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-shadow"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-shadow"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark bg-white focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-shadow"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-shadow resize-vertical"
                placeholder="Tell us about your needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-dark font-black text-xl py-4 rounded-full transition-all cursor-pointer hover:shadow-[0_0_25px_rgba(212,168,67,0.4)] uppercase"
            >
              Request Free Quote
            </button>
          </form>

          {/* Right side — persuasive CTA — 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-black mb-4 uppercase">
                Why Get a Quote <span className="text-gold">Today</span>?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 font-medium">100% free, no-obligation estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 font-medium">Same day service available</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 font-medium">Local RGV family business</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300 font-medium">Quality work guaranteed</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark rounded-2xl p-8 text-center">
              <p className="text-gray-400 text-sm mb-3">Prefer to talk now?</p>
              <a
                href="tel:9568123583"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-black text-lg px-8 py-4 rounded-full transition-all w-full hover:shadow-[0_0_25px_rgba(212,168,67,0.4)] uppercase"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27c1.1.37 2.29.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.2 2.4.57 3.5a1 1 0 01-.27.99l-2.18 2.3z" />
                </svg>
                (956) 812-3583
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
