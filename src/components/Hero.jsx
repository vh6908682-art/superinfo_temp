export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent-400/40 rounded-full" />
        <div className="absolute top-40 left-40 text-accent-400/30 text-xl">+</div>
        <div className="absolute bottom-40 left-24 w-3 h-3 border border-accent-400/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent-400/20 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 text-accent-400/15 text-sm">&#10022;</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="font-heading italic text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-8">
              The number 1st in Direct Response Marketing
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              We are a company specialized in high-quality nutraceutical products, focused on developing and distributing innovative solutions for international markets.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/25"
            >
              Learn About SIP
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right - SIP Logo graphic */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-accent-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-accent-500/10 animate-pulse" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-accent-500/40 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 bg-accent-500/40 rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-accent-500/40 rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-accent-500/40 rounded-full" />

                {/* Inner circle with logo */}
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-600/10 border border-accent-500/30 flex flex-col items-center justify-center backdrop-blur-sm">
                  <svg className="w-10 h-10 text-accent-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                  <span className="text-white text-3xl font-bold tracking-tight">
                    S<span className="text-accent-400">i</span>P
                  </span>
                  <span className="text-accent-300/70 text-[10px] uppercase tracking-[0.25em] mt-1">Direct Response</span>
                  <span className="text-accent-300/70 text-[10px] uppercase tracking-[0.25em]">Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
