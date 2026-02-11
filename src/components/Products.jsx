export default function Products() {
  const products = [
    {
      title: 'Nutritional Supplements',
      description: 'Complete line of supplements developed with premium ingredients and advanced technology for general well-being.',
      iconColor: 'text-accent-500',
      hasBorder: true,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Specialized Products',
      description: 'Exclusive formulas developed with advanced scientific research and selected natural ingredients.',
      iconColor: 'text-navy-800',
      hasBorder: true,
      active: true,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-3-3l3 3 3-3" />
        </svg>
      ),
    },
    {
      title: 'Quality Control',
      description: 'All products follow rigorous quality standards and are tested in certified laboratories.',
      iconColor: 'text-accent-500',
      hasBorder: true,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading italic text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-navy-700 mb-4 leading-tight">
            Our Products
          </h2>
          <div className="w-12 h-1 bg-navy-800 rounded-full mx-auto mb-6" />
          <p className="text-gray-500 italic">
            High-quality nutraceutical products for diverse needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.title} className="relative group">
              <div className={`h-1 w-full rounded-t-xl bg-gradient-to-r ${product.active ? 'from-accent-500 to-accent-500' : 'from-navy-800 to-accent-500'}`} />
              <div className={`bg-white rounded-b-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 ${product.active ? 'shadow-md' : ''}`}>
                <div className={`${product.iconColor} mx-auto mb-5`}>
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-700 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
