export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gold mb-3">
              Orion Auto Glass
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional auto glass repair and replacement serving the Rio
              Grande Valley, South Texas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-3">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:9568123583"
                  className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.99-.27c1.1.37 2.29.57 3.5.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.2 2.4.57 3.5a1 1 0 01-.27.99l-2.18 2.3z" />
                  </svg>
                  (956) 812-3583
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@orionautoglass.org"
                  className="text-gray-400 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  admin@orionautoglass.org
                </a>
              </li>
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h4 className="font-bold text-white mb-3">Service Area</h4>
            <p className="text-gray-400 text-sm flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Serving the Rio Grande Valley, South Texas
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700/50 text-center text-gray-500 text-sm">
          &copy; 2026 Orion Auto Glass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
