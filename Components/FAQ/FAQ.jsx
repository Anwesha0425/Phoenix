/* FAQ — improved with gradient section heading, decorative divider, and polished layout */
import React from 'react'
import { motion } from 'framer-motion'
import QnA from './QnA'

const questions = [
  {
    question: 'What is competitive Programming?',
    answer:
      'Competitive Programming is a mental sport where contestants solve coding problems using maths, data structures and algorithms with memory/time restrictions. They are judged on the basis of output produced, execution time, and program size.',
  },
  {
    question: 'What is most important for competitive programming?',
    answer:
      'Competitive programming requires a deep understanding of algorithms and data structures, as well as the ability to think logically and solve problems efficiently under time pressure.',
  },
  {
    question: 'Which language is mostly used in competitive programming?',
    answer:
      'The 5 most-preferred languages are: C++ (most popular due to STL and speed), Java, Python, Kotlin, and Ruby. C++ is the dominant choice in competitive programming.',
  },
  {
    question: 'What is the difference between CP and DSA?',
    answer:
      'DSA is about solving real-world problems using programming concepts. CP is a mind sport to train your brain, improve problem-solving, and critical thinking speed under contest conditions.',
  },
  {
    question: 'Can we do CP without DSA?',
    answer:
      'Deep DSA is required when you want to learn computer science theory. Be aware of algorithms and data structures that exist — you apply them under pressure in CP, so understanding them is essential.',
  },
  {
    question: 'Does CP help in placements?',
    answer:
      'Yes! Competitive programming significantly improves coding interview performance. It sharpens problem-solving skills and increases chances of being selected in technical interviews at top companies.',
  },
  {
    question: 'How can I be strong in competitive programming?',
    answer:
      'Pick a language (C++ recommended), understand Time & Space Complexity, study Data Structures and Algorithms fundamentals, and consistently participate in coding challenges on platforms like Codeforces, LeetCode, and AtCoder.',
  },
]

const FAQ = () => {
  return (
    <section className="w-full py-14 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl sm:text-2xl font-bold gradient-text mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-white/50 text-sm mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Everything you need to know about competitive programming
        </motion.p>
        <div className="section-divider w-40 mx-auto" />
      </div>

      {/* Questions */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {questions.map((q, index) => (
          <QnA question={q.question} answer={q.answer} key={index} index={index} />
        ))}
      </motion.div>
    </section>
  )
}

export default FAQ
