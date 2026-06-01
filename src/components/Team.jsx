import React from 'react'

const team = [
  { name: 'Haley Carter',   role: 'CEO & founder',       img: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'James Walker',   role: 'Ads manager',          img: 'https://randomuser.me/api/portraits/men/41.jpg' },
  { name: 'Jessica Morgan', role: 'Vice president',       img: 'https://randomuser.me/api/portraits/women/28.jpg' },
  { name: 'Ashley Bennett', role: 'Marketing & sales',    img: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Emily Parker',   role: 'Content marketer',     img: 'https://randomuser.me/api/portraits/women/31.jpg' },
  { name: 'Ryan Mitchell',  role: 'Content writer',       img: 'https://randomuser.me/api/portraits/men/86.jpg' },
  { name: 'Megan Brooks',   role: 'Performance manager',  img: 'https://randomuser.me/api/portraits/women/57.jpg' },
  { name: 'Amber Foster',   role: 'Senior writer',        img: 'https://randomuser.me/api/portraits/women/72.jpg' },
]

export default function Team() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-5">
            Meet the team
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate team of digital experts dedicated to your brands success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-card flex items-center gap-4 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 cursor-pointer"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-indigo-100 dark:border-indigo-900"
              />
              <div>
                <p className="font-bold text-gray-800 dark:text-white text-sm">{member.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
