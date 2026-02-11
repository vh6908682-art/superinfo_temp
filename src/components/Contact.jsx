export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy-700 mb-4 leading-tight">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-navy-800 rounded-full mx-auto mb-6" />
          <p className="text-gray-500">
            Ready to learn more about our products or explore partnership opportunities?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href="tel:+12132830938"
            className="flex items-center gap-5 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center text-accent-500 shrink-0 group-hover:bg-accent-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-navy-700 mb-1">Phone</h3>
              <p className="text-accent-500 font-medium">+1 213-283-0938</p>
            </div>
          </a>

          <a
            href="mailto:contato@superinfoproducts.com"
            className="flex items-center gap-5 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center text-accent-500 shrink-0 group-hover:bg-accent-100 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-navy-700 mb-1">Email</h3>
              <p className="text-accent-500 font-medium">contato@superinfoproducts.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
