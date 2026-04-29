"use client";

import Image from "next/image";
import { useInView } from "../hooks/useInView";

export default function Hero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/30" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
        <div className="max-w-3xl mx-auto">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight uppercase ${
              isInView ? "animate-fade-in-up" : "animate-hidden"
            }`}
          >
            Your Trusted{" "}
            <span className="text-gold">Glass Repair Experts</span>
          </h1>
          <p
            className={`mt-6 text-xl sm:text-2xl text-gray-300 max-w-2xl font-medium ${
              isInView ? "animate-fade-in-up delay-200" : "animate-hidden"
            }`}
          >
            Professional auto glass repair &amp; replacement serving the Rio Grande Valley.
            Same day service available.
          </p>
          <div
            className={`mt-10 flex flex-col sm:flex-row justify-center gap-4 ${
              isInView ? "animate-fade-in-up delay-400" : "animate-hidden"
            }`}
          >
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-dark font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-[0_0_25px_rgba(212,168,67,0.4)]"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:9568123583"
              className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-dark font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-[0_0_25px_rgba(212,168,67,0.3)]"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27c1.1.37 2.29.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.2 2.4.57 3.5a1 1 0 01-.27.99l-2.18 2.3z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
