"use client";

import Image from "next/image";
import { useInView } from "../hooks/useInView";

const features = [
  {
    title: "Same Day Services",
    description: "Fast turnaround when you need it most. Many repairs completed the same day you call.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "We Come to You",
    description: "Mobile service available — we come to your home, work, or job site. In-shop repairs also available at our San Juan location.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Free Quote",
    description: "Get an honest, no-obligation estimate before any work begins. No surprises, no hidden fees.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Work Guarantee",
    description: "We stand behind our work with a satisfaction guarantee. Quality materials and expert installation every time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const staggerDelays = ["delay-100", "delay-200", "delay-300", "delay-400"];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="why-us" className="relative py-20 text-white overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/why-us-bg.png"
        alt=""
        fill
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/85" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 ${isInView ? "animate-fade-in-up" : "animate-hidden"}`}>
          <h2 className="text-4xl sm:text-5xl font-black uppercase">
            Why Choose <span className="text-gold">Us</span>?
          </h2>
          <p className="mt-4 text-gray-300 text-xl max-w-2xl mx-auto font-medium">
            We&apos;re committed to providing the best auto glass service in the
            Rio Grande Valley.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`
                text-center p-6 rounded-2xl
                bg-white/5 backdrop-blur-sm border border-white/10
                hover:border-gold/30 hover:bg-white/10
                transition-all duration-300
                ${isInView ? `animate-fade-in-up ${staggerDelays[i]}` : "animate-hidden"}
              `}
            >
              <div className={`
                inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-5
                transition-transform duration-300
                ${isInView ? "animate-scale-in" : ""}
              `}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-2 uppercase">{feature.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
