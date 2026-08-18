import { motion } from 'motion/react'
import { ArrowRight, Play, Check } from 'lucide-react'
import logo from '../assets/logo.png'

export function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#f8f8f6] pt-28 sm:min-h-[780px] sm:pt-32">
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-red-100/60 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10 max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em] text-[#c40011]"><span className="h-px w-8 bg-[#c40011]" /> Language education, reimagined</div>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.03] tracking-[-.055em] text-neutral-950 sm:text-6xl lg:text-[76px]">Open the world <span className="text-[#c40011]">through language.</span></h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">Learn with expert teachers, thoughtful programs, and a community that makes every new word feel possible.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => scrollTo('contact')} className="group flex items-center justify-center gap-3 rounded-full bg-[#c40011] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/10 transition hover:-translate-y-0.5 hover:bg-[#a9000f]">Find your course <ArrowRight size={17} className="transition group-hover:translate-x-1" /></button>
            <button onClick={() => scrollTo('about')} className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-[#c40011] hover:text-[#c40011]"><Play size={15} fill="currentColor" /> Discover our approach</button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-neutral-600"><span className="flex items-center gap-2"><Check size={16} className="text-[#c40011]" /> Certified teachers</span><span className="flex items-center gap-2"><Check size={16} className="text-[#c40011]" /> Online & offline</span><span className="flex items-center gap-2"><Check size={16} className="text-[#c40011]" /> Any level</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-[.88] overflow-hidden rounded-[2rem] bg-neutral-200 shadow-2xl shadow-neutral-900/10 sm:aspect-square">
            <img src="https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Teacher leading a lively language class" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-7 sm:left-7 sm:right-7"><div><p className="text-xs uppercase tracking-[.18em] text-white/70">The academy</p><p className="mt-1 text-xl font-medium">Where curiosity speaks louder.</p></div><img src={logo} alt="" className="hidden h-14 w-auto rounded-lg bg-white p-1 sm:block" /></div>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-8"><p className="text-2xl font-semibold text-[#c40011]">11+</p><p className="text-xs font-medium text-neutral-500">languages to choose from</p></div>
        </motion.div>
      </div>
    </section>
  )
}
