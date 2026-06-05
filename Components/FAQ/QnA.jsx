/* QnA — improved with Framer Motion animated accordion and polished styling */
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

const QnA = ({ question, answer, index }) => {
  const [isopen, setisopen] = useState(false)

  return (
    <div
      key={index}
      className="rounded-xl m-3 overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: isopen
          ? '1px solid rgba(162, 61, 237, 0.7)'
          : '1px solid rgba(162, 61, 237, 0.2)',
        boxShadow: isopen ? '0 4px 24px rgba(162,61,237,0.15)' : 'none',
        transition: 'border 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Question row */}
      <button
        className="w-full text-left p-4 flex justify-between items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors duration-200"
        onClick={() => setisopen(!isopen)}
        aria-expanded={isopen}
      >
        <h3 className="font-semibold text-base sm:text-sm text-white/90 leading-snug">
          {question}
        </h3>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isopen ? '#a23ded' : 'rgba(162,61,237,0.15)',
            border: '1px solid rgba(162,61,237,0.4)',
          }}
        >
          {isopen ? (
            <IoIosArrowUp size={14} color={isopen ? '#090a0f' : '#a23ded'} />
          ) : (
            <IoIosArrowDown size={14} color="#a23ded" />
          )}
        </span>
      </button>

      {/* Animated answer */}
      <AnimatePresence initial={false}>
        {isopen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-4 pb-4 pt-1 text-sm sm:text-xs leading-relaxed"
              style={{
                borderTop: '1px solid rgba(162,61,237,0.15)',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QnA