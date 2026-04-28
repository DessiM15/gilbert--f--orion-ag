export default function Hero() {
  return (
    <section className="relative bg-dark text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,67,0.15),_transparent_60%)]" />

      {/* Decorative cracked glass lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path d="M600 0 L650 200 L800 150 L750 350 L900 400" stroke="white" strokeWidth="1" />
          <path d="M600 0 L550 180 L400 220 L450 380 L300 450" stroke="white" strokeWidth="1" />
          <path d="M600 0 L620 250 L700 300 L680 500" stroke="white" strokeWidth="0.5" />
          <path d="M600 0 L580 230 L500 280 L520 480" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Broken Glass?{" "}
            <span className="text-gold">We&apos;ve Got You Covered.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
            Professional auto glass repair &amp; replacement serving the Rio Grande Valley.
            Same day service available.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-dark font-bold text-lg px-8 py-4 rounded-full transition-colors"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:9568123583"
              className="inline-flex items-center justify-center border-2 border-gold text-gold hover:bg-gold hover:text-dark font-bold text-lg px-8 py-4 rounded-full transition-colors"
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
