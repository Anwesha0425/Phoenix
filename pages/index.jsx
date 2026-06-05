/* Homepage — improved with About card, animated headings, and Join Us CTA */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Homeredirect from '../Components/HomeRedirect/homeredirect'
import Faq from '../Components/FAQ/FAQ'

const Index = ({ theme }) => {
  return (
    <>
      <Head>
        <title>Home | Phoenix</title>
        <meta
          name="description"
          content="Phoenix — An open community for competitive programming enthusiasts from NIT Rourkela. Contests, resources, chatroom and more."
        />
      </Head>

      <div className="flex items-center flex-col w-full overflow-hidden">
        
        {/* New Hero Section */}
        <section className="w-full max-w-5xl px-6 py-20 sm:py-12 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-6xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a23ded] to-[#00ffcc] mb-2 drop-shadow-[0_0_15px_rgba(162,61,237,0.4)]">
              Welcome to Phoenix
            </h1>
            <h2 className="text-2xl sm:text-xl font-medium text-white/90 italic mb-6">
              "Rise from the ashes"
            </h2>
            <p className="text-white/80 text-xl sm:text-base leading-relaxed max-w-3xl mx-auto mb-10">
              A centralized learning platform for students interested in competitive programming and software engineering.
            </p>
            <div className="flex justify-center gap-6 sm:gap-4 flex-wrap">
              <Link
                href="/cs-fundamentals"
                className="inline-block px-8 py-3 rounded-full font-semibold text-dark__blue transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a23ded, #00ffcc)',
                  boxShadow: '0 4px 20px rgba(162,61,237,0.35)',
                }}
              >
                Start Learning
              </Link>
              <Link
                href="/questions"
                className="inline-block px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 border border-[#00ffcc] bg-[#00ffcc]/10 hover:bg-[#00ffcc]/20"
              >
                Practice Problems
              </Link>
            </div>
          </motion.div>
        </section>



        {/* Explore grid */}
        <div className="w-full">
          <Homeredirect theme={theme} />
        </div>

        {/* Join Us CTA */}
        <motion.section
          className="w-full py-14 sm:py-8 px-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="max-w-2xl mx-auto rounded-2xl py-12 px-8 sm:py-8 sm:px-4"
            style={{
              background: 'linear-gradient(135deg, rgba(162,61,237,0.15) 0%, rgba(0,255,204,0.12) 50%, rgba(9,10,15,0.15) 100%)',
              border: '1px solid rgba(162,61,237,0.25)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
            }}
          >
            <h2 className="text-3xl sm:text-xl font-bold text-white mb-3">
              Ready to level up? 🚀
            </h2>
            <p className="text-white/60 text-base sm:text-sm mb-8">
              Join the community, practice problems, and compete with the best.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-3 rounded-full font-bold text-dark__blue transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #a23ded, #00ffcc)',
                  boxShadow: '0 4px 24px rgba(162,61,237,0.4)',
                }}
              >
                Get Started
              </Link>
              <Link
                href="/chatroom"
                className="px-8 py-3 rounded-full font-semibold text-main border border-main/50 hover:bg-main/10 transition-all duration-300"
              >
                Join Chatroom
              </Link>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <div className="w-full">
          <Faq />
        </div>
      </div>
    </>
  )
}

export default Index