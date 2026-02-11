export default function Quality() {
  const features = [
    { icon: '✨', title: 'Agile', subtitle: 'Methodologies' },
    { icon: '🚀', title: 'Continuous', subtitle: 'Deploy' },
    { icon: '🔒', title: 'Advanced', subtitle: 'Security' },
    { icon: '📊', title: '24/7 Monitoring', subtitle: '' },
  ]

  return (
    <section id="quality" className="py-20 md:py-28 bg-navy-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Pink gradient card */}
        <div className="bg-gradient-to-b from-[#f74373] to-[#e91e63] rounded-2xl px-8 py-14 md:px-16 md:py-16 text-center relative overflow-hidden">
          {/* Decorative dots */}
          <div className="absolute top-10 left-[15%] w-2 h-2 bg-white/15 rounded-full" />
          <div className="absolute top-[45%] left-[12%] w-2 h-2 bg-white/10 rounded-full" />
          <div className="absolute top-[55%] right-[10%] w-2.5 h-2.5 bg-white/12 rounded-full" />
          <div className="absolute bottom-[35%] left-[42%] w-2 h-2 bg-white/10 rounded-full" />
          <div className="absolute bottom-[35%] right-[38%] w-2 h-2 bg-white/10 rounded-full" />

          <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 leading-tight">
            Excellence in Quality
          </h2>
          <div className="w-12 h-1 bg-navy-900 rounded-full mx-auto mb-5" />
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto mb-10 text-[15px]">
            All our products undergo rigorous quality testing and control. We follow the best nutraceutical practices to ensure safe and effective products.
          </p>

          {/* Feature badges - single row */}
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-navy-900/35 backdrop-blur-sm rounded-xl px-5 py-3.5 flex items-center gap-3 border border-white/5 min-w-[150px]"
              >
                <span className="text-lg shrink-0">{feature.icon}</span>
                <div className="text-left">
                  <span className="text-white text-sm font-medium block leading-tight">{feature.title}</span>
                  {feature.subtitle && (
                    <span className="text-white text-sm font-medium block leading-tight">{feature.subtitle}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
