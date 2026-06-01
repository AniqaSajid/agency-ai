import React from 'react'

const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center pt-32 pb-0 overflow-hidden hero-bg dark:bg-gray-950">
      {/* Background blob */}
      <div className="absolute top-20 right-0 w-[600px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-200/40 via-purple-100/30 to-blue-100/20 blur-3xl pointer-events-none dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-blue-900/10" />

      {/* Trusted badge */}
      <div className="relative z-10 flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-full px-5 py-2.5 shadow-sm mb-8 fade-up">
        <div className="flex -space-x-2">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 object-cover"
            />
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Trusted by 10k+ people</span>
      </div>

      {/* Headline */}
      <div className="relative z-10 text-center px-4 max-w-4xl fade-up" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-white leading-tight tracking-tight">
          Turning imagination<br />
          into{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">digital</span>
          {' '}impact.
        </h1>
        <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Creating meaningful connections and turning big ideas into interactive digital experiences.
        </p>
      </div>

      {/* Hero image */}
      <div className="relative z-10 mt-12 w-full max-w-5xl px-4 fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt="Team working"
            className="w-full h-[340px] md:h-[420px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
