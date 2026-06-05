/* Sidebar — redesigned with router-aware active detection, tooltips, and improved hover states */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosHome } from 'react-icons/io'
import { BsFillChatRightFill, BsPersonFill, BsCodeSlash } from 'react-icons/bs'
import { FaCalendarAlt } from 'react-icons/fa'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'

const navItems = [
  { href: '/', icon: IoIosHome, label: 'Home' },
  { href: '/profile', icon: BsPersonFill, label: 'Profile' },
  { href: '/chatroom', icon: BsFillChatRightFill, label: 'Chat' },
  { href: '/events', icon: FaCalendarAlt, label: 'Events' },
  { href: '/resources', icon: AiOutlineAppstoreAdd, label: 'Resources' },
  { href: '/questions', icon: BsCodeSlash, label: 'Questions' },
  { href: '/more', icon: FiMoreHorizontal, label: 'More' },
]

const Sidebar = () => {
  const router = useRouter()

  return (
    <div
      className="fixed flex flex-col justify-evenly items-center border-r border-main/30 top-0 left-0 bottom-0 pt-[64px] w-[80px] sm:w-[60px] z-[99]"
      style={{
        background: 'rgba(11, 0, 93, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      {navItems.map(({ href, icon: Icon, label }) => {
        const isActive =
          href === '/' ? router.pathname === '/' : router.pathname.startsWith(href)

        return (
          <Link href={href} key={href} className="w-full flex justify-center group relative">
            <div
              className={
                'flex flex-col justify-center items-center rounded-lg w-[62px] h-[62px] sm:w-[48px] sm:h-[48px] p-1 transition-all duration-300 ' +
                (isActive
                  ? 'sidebar-active'
                  : 'text-main/60 hover:text-main hover:bg-main/10')
              }
              title={label}
            >
              <Icon size={28} className="sm:w-[22px] sm:h-[22px]" />
              <span className="text-[10px] mt-0.5 sm:hidden font-medium">{label}</span>
            </div>

            {/* Tooltip for mobile */}
            <span className="hidden sm:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-main text-dark__blue text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
              {label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar