export default function GlobalPresence() {
  const regions = [
    {
      title: 'SOUTH AMERICA',
      description: 'Operations base in Brazil with expansion to other South American countries',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'NORTH AMERICA',
      description: 'Strategic market in the United States focused on high commercial performance',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'EUROPE',
      description: 'European gateway with distribution across multiple countries on the continent',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ]

  return (
    <section id="global" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy-700 mb-4 leading-tight">
            Where does SIP Group operate?
          </h2>
          <div className="w-12 h-1 bg-navy-800 rounded-full mx-auto mb-6" />
          <p className="text-gray-500 italic">
            International presence across three strategic continents
          </p>
        </div>

        {/* 2 + 1 grid layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6">
          {regions.slice(0, 2).map((region) => (
            <RegionCard key={region.title} region={region} />
          ))}
        </div>
        <div className="max-w-md mx-auto">
          <RegionCard region={regions[2]} />
        </div>
      </div>
    </section>
  )
}

function RegionCard({ region }) {
  return (
    <div className="relative">
      <div className="h-1 w-full bg-gradient-to-r from-navy-800 to-accent-500 rounded-t-xl" />
      <div className="bg-white rounded-b-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
        <div className="w-16 h-16 rounded-full bg-accent-50 border border-accent-100 flex items-center justify-center text-navy-700 mx-auto mb-5">
          {region.icon}
        </div>
        <h3 className="text-base font-bold text-navy-700 mb-3 tracking-wider uppercase">
          {region.title}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">{region.description}</p>
      </div>
    </div>
  )
}
