import React from 'react'

const works = [
  {
    title: 'E-commerce App',
    tag: 'Mobile Design',
    color: 'from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
  {
    title: 'Analytics Dashboard',
    tag: 'Web App',
    color: 'from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'Fitness Tracker',
    tag: 'Mobile Design',
    color: 'from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30',
    img: 'https://images.unsplash.com/photo-1434494817513-cc112a976e36?w=600&q=80',
  },
]

export default function Work() {
  return (
    <section id="our-work" className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-5">
            Our latest work
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <div key={i} className={`work-card rounded-2xl bg-gradient-to-br ${work.color} p-5 cursor-pointer overflow-hidden`}>
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-3 py-1 rounded-full">
                    {work.tag}
                  </span>
                  <h3 className="mt-2 font-bold text-gray-800 dark:text-white">{work.title}</h3>
                </div>
                <button className="w-9 h-9 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors group">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
