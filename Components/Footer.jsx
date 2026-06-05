/* Footer — fixed broken mobile layout, added gradient border, hover glow on social icons */
import React from 'react'
import { SiYoutube } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import Link from 'next/link'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    href: 'mailto:anwesharanigouda@gmail.com',
    icon: GrMail,
    title: 'Email us',
    color: '#a23ded',
  },
  {
    href: 'https://www.youtube.com/@cpunofficial1196/videos',
    icon: SiYoutube,
    title: 'YouTube',
    color: '#ff0000',
  },
  {
    href: 'https://github.com/Anwesha0425/Phoenix',
    icon: BsGithub,
    title: 'GitHub',
    color: '#ffffff',
  },
]

const Footer = () => {
  return (
    <footer
      className="relative w-full mt-8"
      style={{
        borderTop: '1px solid rgba(162, 61, 237, 0.3)',
        background: 'rgba(9, 10, 15, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {/* Gold gradient top line */}
      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="flex flex-col items-center py-8 px-4 gap-5">
        {/* Social icons */}
        <div className="flex items-center gap-6 sm:gap-4">
          {socialLinks.map(({ href, icon: Icon, title, color }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300"
              style={{
                border: '1px solid rgba(162,61,237,0.25)',
                color: 'rgba(162,61,237,0.8)',
              }}
              whileHover={{
                scale: 1.15,
                color,
                borderColor: color,
                boxShadow: `0 0 14px ${color}55`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          <Link href="/about" className="hover:text-main transition-colors duration-200">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-main transition-colors duration-200">
            Contact
          </Link>
          <Link href="/events" className="hover:text-main transition-colors duration-200">
            Events
          </Link>
          <Link href="/resources" className="hover:text-main transition-colors duration-200">
            Resources
          </Link>
          <Link href="/terms_and_conditions" className="hover:text-main transition-colors duration-200">
            Terms
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white/35 text-center">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://www.linkedin.com/in/anwesharanigouda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-main/70 hover:text-main transition-colors duration-200"
          >
            Anwesha
          </a>{' '}
          · Phoenix · All rights reserved · India
        </p>
      </div>
    </footer>
  )
}

export default Footer