import React from 'react'

const services = [
  {
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm3 11a4 4 0 100 8 4 4 0 000-8z"/>
      </svg>
    ),
    title: 'Advertising',
    desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h10M4 14h16M4 18h10"/>
      </svg>
    ),
    title: 'Content marketing',
    desc: 'We help you execute your plan and deliver results.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
    title: 'Content writing',
    desc: 'We help you create a marketing strategy that drives results.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    ),
    title: 'Social media',
    desc: 'We help you build a strong social media presence and engage with your audience.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'SEO & Analytics',
    desc: 'We optimize your online presence and track performance with data-driven insights.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    title: 'Web development',
    desc: 'We build fast, beautiful and responsive websites tailored to your business needs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-5">
            How can we help?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card flex items-start gap-5 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 cursor-pointer"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
