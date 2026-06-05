/* HomeRedirect — redesigned with icon headers, glassmorphism cards,
   smooth Framer Motion hover reveals, and a section heading */
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsFillChatRightFill } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'

const cards = [
  {
    href: '/chatroom',
    icon: BsFillChatRightFill,
    label: 'Chatroom',
    accent: '#7c3aed',
    description:
      'A place to exchange ideas and contribute to the community. Post messages, comments, and questions — viewed and responded to by other members.',
  },
  {
    href: '/events',
    icon: FaCalendarAlt,
    label: 'Events',
    accent: '#db2777',
    description:
      'Track upcoming programming contests and community events. Never miss a competition again.',
  },
  {
    href: '/resources',
    icon: AiOutlineAppstoreAdd,
    label: 'Resources',
    accent: '#059669',
    description:
      'Curated collection of the most popular resources for competitive programming — books, sheets, blogs, and more.',
  },
  {
    href: '/more',
    icon: FiMoreHorizontal,
    label: 'More',
    accent: '#d97706',
    description:
      'Popular online tools and browser extensions to supercharge your competitive programming workflow.',
  },
]

const Homeredirect = ({ theme }) => {
  return (
    <section className="w-full py-12 px-4">
      {/* Section heading */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl sm:text-2xl font-bold gradient-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Explore
        </motion.h2>
        <div className="section-divider w-32 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 max-w-5xl mx-auto">
        {cards.map(({ href, icon: Icon, label, accent, description }, i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={href} className="block h-full">
              <motion.div
                className="relative h-full min-h-[200px] sm:min-h-[120px] rounded-2xl p-6 sm:p-4 flex flex-col justify-between overflow-hidden cursor-pointer"
                style={{
                  background: theme
                    ? 'rgba(11, 0, 93, 0.55)'
                    : 'rgba(0, 71, 159, 0.45)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: `1px solid ${accent}55`,
                  boxShadow: `0 4px 30px rgba(0,0,0,0.3)`,
                  transition: 'all 0.35s ease',
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 8px 40px ${accent}40, 0 0 0 1px ${accent}88`,
                  borderColor: accent,
                }}
              >
                {/* Subtle corner glow */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none"
                  style={{ background: accent }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center mb-4 sm:mb-2"
                  style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
                >
                  <Icon size={24} style={{ color: accent }} className="sm:w-4 sm:h-4" />
                </div>

                {/* Label */}
                <h3
                  className="text-2xl sm:text-lg font-bold text-white mb-2"
                  style={{ fontFamily: 'Signika, Inter, sans-serif' }}
                >
                  {label}
                </h3>

                {/* Description — always visible on mobile, hover-revealed on desktop */}
                <p className="text-white/65 text-sm leading-relaxed sm:text-xs">
                  {description}
                </p>

                {/* Arrow indicator */}
                <div
                  className="mt-4 text-sm font-semibold flex items-center gap-1 sm:hidden"
                  style={{ color: accent }}
                >
                  Explore →
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Homeredirect