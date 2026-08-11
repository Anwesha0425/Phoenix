import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaQuestionCircle, FaLaptopCode } from 'react-icons/fa'

const agents = [
  {
    href: '/cs-fundamentals',
    icon: FaGraduationCap,
    label: 'CS Tutor',
    accent: '#00ffcc',
    description:
      'Stuck on a concept? Chat with our AI Pedagogical Tutor to master Computer Science fundamentals without getting the direct answers.',
  },
  {
    href: '/questions',
    icon: FaQuestionCircle,
    label: 'Problem Generator',
    accent: '#a23ded',
    description:
      'Get personalized, competitive programming problems based on difficulty and topic, generated on the fly.',
  },
  {
    href: '/ide',
    icon: FaLaptopCode,
    label: 'IDE Assistant',
    accent: '#ff007f',
    description:
      'Code in our Online IDE and let our AI Code Reviewer identify bugs and guide you towards the optimal solution.',
  },
]

const AIAgents = ({ theme }) => {
  return (
    <section className="w-full py-12 px-4 mt-8">
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl sm:text-2xl font-bold gradient-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet Your AI Mentors
        </motion.h2>
        <div className="section-divider w-32 mx-auto" />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6 max-w-5xl mx-auto">
        {agents.map(({ href, icon: Icon, label, accent, description }, i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={href} className="block h-full">
              <motion.div
                className="relative h-full min-h-[220px] rounded-2xl p-6 sm:p-5 flex flex-col justify-between overflow-hidden cursor-pointer"
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
                  scale: 1.03,
                  boxShadow: `0 8px 40px ${accent}40, 0 0 0 1px ${accent}88`,
                  borderColor: accent,
                }}
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-3xl pointer-events-none"
                  style={{ background: accent }}
                />

                <div
                  className="w-14 h-14 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 sm:mb-3"
                  style={{ background: `${accent}22`, border: `1px solid ${accent}55` }}
                >
                  <Icon size={28} style={{ color: accent }} className="sm:w-6 sm:h-6" />
                </div>

                <h3
                  className="text-2xl sm:text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Signika, Inter, sans-serif' }}
                >
                  {label}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed sm:text-xs">
                  {description}
                </p>
                
                <div
                  className="mt-5 text-sm font-semibold flex items-center gap-1 sm:hidden opacity-0 transition-opacity duration-300 hover-reveal"
                  style={{ color: accent }}
                >
                  Try Now →
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AIAgents
