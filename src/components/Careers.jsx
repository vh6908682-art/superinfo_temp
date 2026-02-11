export default function Careers() {
  return (
    <section id="careers" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy-700 mb-4 leading-tight">
          Join Our Team
        </h2>
        <div className="w-12 h-1 bg-navy-800 rounded-full mx-auto mb-8" />
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          Be part of an innovative company in the nutraceutical sector. Help us develop products that make a difference in people's lives.
        </p>
        <a
          href="https://superinfoproducts.site/careers"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/25"
        >
          Explore Career Opportunities
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
