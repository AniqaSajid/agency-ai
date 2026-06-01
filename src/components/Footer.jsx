import React, { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Left: Logo + nav */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
                <path d="M0 14L8 0L16 14L8 28L0 14Z" fill="#4F46E5" opacity="0.7"/>
                <path d="M8 14L16 0L24 14L16 28L8 14Z" fill="#4F46E5"/>
                <path d="M16 14L24 0L32 14L24 28L16 14Z" fill="#818CF8"/>
              </svg>
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                agency.<span className="text-indigo-600">ai</span>
              </span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              From strategy to execution, we craft digital solutions that move your business forward.
            </p>
            <div className="flex flex-wrap gap-6">
              {['Home', 'Services', 'Our Work', 'Contact Us'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="max-w-sm w-full">
            <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-2">Subscribe to our newsletter</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-400"
              />
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-semibold text-sm transition-colors"
                onClick={() => { if (email) setEmail('') }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Copyright 2025 © GreatStack - All Right Reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2}/>
                <circle cx="12" cy="12" r="4" strokeWidth={2}/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth={0}/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
