/* Navbar component — redesigned with glassmorphism, fixed duplicate Firebase init,
   improved theming, user avatar display, and smooth hover animations */
import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import Link from 'next/link'
import Image from 'next/image'
import { RiMoonFill } from 'react-icons/ri'
import { BsFillSunFill } from 'react-icons/bs'
import { Offline } from "react-detect-offline"
import { auth } from '@/firebaseclient'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ theme, choosetheme }) => {
  const [user] = useAuthState(auth)
  const [isOpen, setOpen] = useState(false)

  const navBg = theme
    ? 'bg-bg_blue_phoenix/80 border-main/30 text-main'
    : 'bg-light_theme_ot/80 border-main/30 text-white'

  const btnBase =
    'relative px-4 py-1.5 rounded-full font-semibold text-sm border transition-all duration-300 '
  const btnDark =
    'border-main text-main hover:bg-main hover:text-dark__blue '
  const btnLight =
    'border-white text-white hover:bg-white hover:text-light_theme_ot '

  const themeBtn = theme
    ? 'border-main text-main hover:bg-main hover:text-dark__blue'
    : 'border-white text-white hover:bg-white hover:text-light_theme_ot'

  return (
    <div
      className={
        'fixed top-0 right-0 w-full h-[64px] z-[100] border-b backdrop-blur-md flex justify-center items-center ' +
        navBg
      }
      style={{ transition: 'background 0.3s ease' }}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-3 sm:px-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <Image
            src="/logo.png"
            alt="Phoenix Logo"
            height={56}
            width={56}
            className="object-contain"
          />
          <span className="text-2xl font-black italic tracking-wider sm:hidden drop-shadow-[0_0_10px_rgba(162,61,237,0.4)]" style={{ background: 'linear-gradient(135deg, #a23ded, #00ffcc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Phoenix
          </span>
        </Link>

        {/* Hamburger (mobile only) */}
        <div className="hidden sm:block">
          <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={
                'fixed top-[64px] right-0 left-0 z-50 flex flex-col items-center gap-3 py-4 px-4 border-b border-main/30 backdrop-blur-md ' +
                (theme ? 'bg-bg_blue_phoenix/95' : 'bg-light_theme_ot/95')
              }
            >
              <Offline>
                <div className="bg-main text-dark__blue text-sm px-3 py-1.5 rounded-full font-semibold">
                  ⚠ Weak internet connection
                </div>
              </Offline>

              {user ? (
                <div className="flex flex-col items-center gap-3 w-full">
                  {user.photoURL && (
                    <Image
                      src={user.photoURL}
                      alt="avatar"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-main"
                    />
                  )}
                  <span className="text-sm opacity-75">{user.displayName}</span>
                  <button
                    className={btnBase + (theme ? btnDark : btnLight) + 'w-full justify-center'}
                    onClick={() => { auth.signOut(); setOpen(false) }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-2 w-full">
                  <Link
                    href="/signup"
                    onClick={() => setOpen(false)}
                    className={btnBase + (theme ? btnDark : btnLight) + 'text-center block'}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="/signin"
                    onClick={() => setOpen(false)}
                    className={btnBase + (theme ? btnDark : btnLight) + 'text-center block'}
                  >
                    Sign In
                  </Link>
                </div>
              )}

              <button
                className={'p-2 rounded-full border transition-all duration-300 ' + themeBtn}
                onClick={() => { choosetheme(!theme); setOpen(false) }}
                aria-label="Toggle theme"
              >
                {theme ? <BsFillSunFill size={20} /> : <RiMoonFill size={20} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop right section */}
        <div className="flex items-center gap-3 sm:hidden">
          <Offline>
            <div className="bg-main text-dark__blue text-xs px-3 py-1 rounded-full font-semibold animate-pulse-glow">
              ⚠ Weak connection
            </div>
          </Offline>

          {/* Theme toggle */}
          <button
            className={'p-2 rounded-full border transition-all duration-300 ' + themeBtn}
            onClick={() => choosetheme(!theme)}
            aria-label="Toggle theme"
          >
            {theme ? <BsFillSunFill size={20} /> : <RiMoonFill size={20} />}
          </button>

          {/* Auth section */}
          {user ? (
            <div className="flex items-center gap-3">
              {user.photoURL && (
                <Link href="/profile">
                  <Image
                    src={user.photoURL}
                    alt="User avatar"
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-main hover:scale-105 transition-transform duration-200 cursor-pointer"
                  />
                </Link>
              )}
              <button
                className={btnBase + (theme ? btnDark : btnLight)}
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/signup" className={btnBase + (theme ? btnDark : btnLight)}>
                Sign Up
              </Link>
              <Link
                href="/signin"
                className={
                  btnBase +
                  'bg-main text-dark__blue border-main hover:bg-transparent hover:text-main '
                }
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar