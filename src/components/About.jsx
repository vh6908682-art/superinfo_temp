export default function About() {
  const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '50+', label: 'Products Developed' },
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left content */}
          <div>
            <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy-700 mb-4 leading-tight">
              About SIP
            </h2>
            <div className="w-12 h-1 bg-navy-800 rounded-full mb-8" />
            <p className="text-gray-600 leading-relaxed mb-6">
              We drive nutraceutical brands and products at the accelerated pace of Direct Response Marketing. Our team operates at every stage — from development to market positioning — creating offers that connect, engage and convert on a global scale.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              We combine commercial agility and deep understanding of consumer behavior to deliver solutions that perform from the first contact. The result is high-impact campaigns, supported by superior quality products and strategies that maximize sales and international presence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="relative">
                  <div className="h-1 w-full bg-gradient-to-r from-navy-800 to-accent-500 rounded-t-lg" />
                  <div className="bg-white border border-gray-200 rounded-b-xl p-6 text-center">
                    <span className="text-4xl font-extrabold text-accent-500 block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-gray-500 text-sm">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - SIP Logo card */}
          <div className="bg-black rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px]">
            <svg className="w-12 h-12 text-white/80 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <h3 className="text-white text-6xl lg:text-7xl font-extrabold tracking-tight mb-1">
              S<span className="text-white">i</span>P
              <span className="text-white/60 text-lg align-super ml-1">&reg;</span>
            </h3>
            <p className="text-gray-400 text-sm tracking-widest mt-2">Direct Response Marketing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
