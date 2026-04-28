const services = [
  {
    title: "Windshield Repair",
    description:
      "Quick, reliable windshield chip and crack repairs. We restore your windshield's integrity and clarity so you can drive safely.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01M12 9v.01M12 15v.01M4.5 19.5l3-3m0 0l1.5-1.5M7.5 16.5L6 15m12 4.5l-3-3m0 0l-1.5-1.5M16.5 16.5L18 15M12 3C7.5 3 3.75 6 3 9.75L4.5 19.5h15L21 9.75C20.25 6 16.5 3 12 3z" />
      </svg>
    ),
  },
  {
    title: "Window Replacement",
    description:
      "Full auto glass window replacement for all vehicle makes and models. We use quality materials for a perfect, factory-level fit.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Window Tint",
    description:
      "Professional window tinting for style, UV protection, and privacy. Multiple shade options available to suit your preferences.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            From small chips to full replacements, we handle it all with
            precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-tan/30 border border-gold/20 rounded-2xl p-8 text-center hover:shadow-lg hover:border-gold/40 transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Discounts banner */}
        <div className="mt-12 text-center">
          <span className="inline-block bg-gold text-dark font-bold text-lg px-8 py-3 rounded-full shadow-md">
            Discounts Available!
          </span>
        </div>
      </div>
    </section>
  );
}
