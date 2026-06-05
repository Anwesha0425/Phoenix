/* Homepage — improved with About card, animated headings, and Join Us CTA */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Carousel from '../Components/Carousel/carousel'
import Homeredirect from '../Components/HomeRedirect/homeredirect'
import Faq from '../Components/FAQ/FAQ'

const Index = ({ theme }) => {
  return (
    <>
      <Head>
        <title>Home | CP Unofficial</title>
        <meta
          name="description"
          content="CP Unofficial — An open community for competitive programming enthusiasts from NIT Rourkela. Contests, resources, chatroom and more."
        />
      </Head>

      <div className="flex items-center flex-col">
        {/* Hero Carousel */}
        <div className="w-full">
          <Carousel theme={theme} />
        </div>

        {/* About Us section */}
        <section className="w-full max-w-4xl px-6 py-14 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-10 sm:p-5 text-center"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(219,173,105,0.2)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
            }}
          >
            <h1 className="text-5xl sm:text-3xl font-bold gradient-text mb-5">
              About Us
            </h1>
            <div className="section-divider w-24 mx-auto mb-6" />
            <p className="text-white/70 text-lg sm:text-sm leading-relaxed max-w-2xl mx-auto mb-6">
              Welcome to <strong className="text-main">CP Unofficial</strong>, an open community dedicated to
              competitive programming enthusiasts! We are a group of students from NIT Rourkela who are
              passionate about programming and have come together to create a space for like-minded
              individuals to connect, grow, and collaborate.
            </p>
            <p className="text-white/60 text-base sm:text-sm leading-relaxed max-w-2xl mx-auto mb-8">
              Whether you are a complete beginner or a seasoned pro — everyone is welcome on this journey.
              We believe programming is not just a hobby, but a way of life.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 rounded-full font-semibold text-dark__blue transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #dbad69, #f5d49a)',
                boxShadow: '0 4px 20px rgba(219,173,105,0.35)',
              }}
            >
              Read More →
            </Link>
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
              background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(219,173,105,0.12) 50%, rgba(7,31,180,0.15) 100%)',
              border: '1px solid rgba(219,173,105,0.25)',
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
                  background: 'linear-gradient(135deg, #dbad69, #f5d49a)',
                  boxShadow: '0 4px 24px rgba(219,173,105,0.4)',
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