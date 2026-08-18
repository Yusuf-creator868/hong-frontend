import { motion } from 'motion/react'
import { Globe as Globe2, MapPinned, Monitor, UsersRound } from 'lucide-react'

const stats = [
  { value: '06', label: 'branches across Tashkent', icon: MapPinned },
  { value: '11+', label: 'languages to explore', icon: Globe2 },
  { value: '2 ways', label: 'online or offline learning', icon: Monitor },
  { value: '1:1 / 1:8', label: 'individual or group classes', icon: UsersRound },
]

export default function Statistics() {
  return <section className="border-b border-neutral-100 bg-white py-10 sm:py-14"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-9 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">{stats.map((stat, index) => { const Icon = stat.icon; return <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .1 }} viewport={{ once: true }} className="flex items-start gap-3 border-neutral-200 px-2 first:pl-0 sm:gap-4 lg:border-l lg:px-7 lg:first:border-0"><Icon size={20} strokeWidth={1.5} className="mt-1 text-[#c40011]" /><div><p className="text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">{stat.value}</p><p className="mt-1 max-w-[150px] text-xs leading-5 text-neutral-500 sm:text-sm">{stat.label}</p></div></motion.div> })}</div></section>
}
