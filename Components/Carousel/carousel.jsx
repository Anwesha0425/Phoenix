/* Carousel — redesigned with a full hero overlay, glassmorphism card, animated CTA,
   and gradient fade edges on the marquee */
import Image from "next/image"
import Marquee from "react-fast-marquee"
import Link from "next/link"
import { motion } from "framer-motion"

const images = [
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1674826123/Screenshot_2022-09-03_102413_szfbn5.png",
    alt: "image 0",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/279881209_801798817465669_8315301464742405531_n_fi9jvr.jpg",
    alt: "image 1",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/312212713_845444913535864_2965981991429716530_n_glljkz.jpg",
    alt: "image 2",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679241238/IMG_20220725_191111_cyhcd7.jpg",
    alt: "image 3",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/283119318_1176580216437313_7004400500214089155_n_vgmitz.jpg",
    alt: "image 4",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/293066269_735263811101629_4917450492142136042_n_wh136u.jpg",
    alt: "image 5",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/307752438_415835390664637_3534036197302672937_n_wfr6fi.jpg",
    alt: "image 6",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1683541169/1_lkvwbh.png",
    alt: "image 7",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/302443510_822286705609631_3473952214574021331_n_epcmhf.jpg",
    alt: "image 8",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1683541167/2_rdqypy.png",
    alt: "image 9",
  },
]

export default function ImageCarousel({ theme }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Marquee strip */}
      <Marquee
        pauseOnHover
        pauseOnClick
        loop={0}
        speed={35}
        gradient={false}
        className="bg-black border-b-2 border-main/40"
        style={{ height: "clamp(220px, 38vw, 520px)" }}
      >
        {images.map((image) => (
          <div key={image.alt} className="relative h-full">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover border-r border-main/30"
              height={900}
              width={900}
              style={{
                height: "clamp(220px, 38vw, 520px)",
                width: "auto",
              }}
            />
          </div>
        ))}
      </Marquee>

      {/* Left fade edge */}
      <div
        className="absolute top-0 left-0 h-full w-[80px] pointer-events-none z-10"
        style={{
          background: theme
            ? "linear-gradient(to right, #0b005d 0%, transparent 100%)"
            : "linear-gradient(to right, #00479f 0%, transparent 100%)",
        }}
      />

      {/* Right fade edge */}
      <div
        className="absolute top-0 right-0 h-full w-[80px] pointer-events-none z-10"
        style={{
          background: theme
            ? "linear-gradient(to left, #0b005d 0%, transparent 100%)"
            : "linear-gradient(to left, #00479f 0%, transparent 100%)",
        }}
      />

      {/* Hero overlay card */}
      <div className="absolute inset-0 flex items-center justify-start pl-[6%] z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto max-w-[340px] sm:max-w-[200px]"
          style={{
            background: "rgba(9, 10, 15, 0.75)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(162, 61, 237, 0.4)",
            borderRadius: "16px",
            padding: "clamp(16px, 3vw, 40px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(162,61,237,0.1)",
          }}
        >
          <motion.p
            className="text-main text-xs font-semibold tracking-widest uppercase mb-2 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🔥 NIT Rourkela
          </motion.p>

          <motion.h1
            className="font-bold text-white leading-tight mb-3"
            style={{ fontSize: "clamp(1.1rem, 3vw, 2.4rem)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Welcome to{" "}
            <span className="gradient-text">Phoenix</span>
          </motion.h1>

          <motion.p
            className="text-white/70 text-sm leading-relaxed mb-5 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Your community for competitive programming — contests, resources, and more.
          </motion.p>

          <motion.div
            className="flex gap-2 sm:flex-col"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              href="/signup"
              className="px-5 py-2 rounded-full bg-main text-dark__blue font-bold text-sm hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
              style={{ boxShadow: "0 4px 20px rgba(162,61,237,0.4)" }}
            >
              Join Now
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 rounded-full border border-main/60 text-main font-semibold text-sm hover:bg-main/10 transition-all duration-300 text-center sm:hidden"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
