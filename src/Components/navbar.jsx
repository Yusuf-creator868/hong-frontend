import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.png'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { label: 'About', section: 'about' },
    { label: 'Languages', section: 'languages' },
    { label: 'Branches', section: 'branches' },
  ]

  const scrollTo = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Hong Kong Academy home" className="rounded-xl bg-white/95 p-1 shadow-sm">
          <img src={logo} alt="Hong Kong Academy" className="h-12 w-auto sm:h-14" />
        </button>
        <div className="hidden items-center gap-9 rounded-full bg-white/90 px-7 py-3.5 shadow-sm backdrop-blur md:flex">
          {links.map((link) => <button key={link.section} onClick={() => scrollTo(link.section)} className="text-sm font-medium text-neutral-600 transition hover:text-[#c40011]">{link.label}</button>)}
          <button onClick={() => scrollTo('contact')} className="flex items-center gap-1.5 rounded-full bg-[#c40011] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a9000f]">Start a conversation <ArrowUpRight size={15} /></button>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} className="rounded-xl bg-white p-3 text-neutral-800 shadow-sm md:hidden">
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {isOpen && <div className="mx-5 rounded-2xl border border-neutral-100 bg-white p-3 shadow-xl md:hidden">
        {links.map((link) => <button key={link.section} onClick={() => scrollTo(link.section)} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-neutral-700 hover:bg-red-50 hover:text-[#c40011]">{link.label}</button>)}
        <button onClick={() => scrollTo('contact')} className="mt-2 w-full rounded-xl bg-[#c40011] px-4 py-3 text-sm font-semibold text-white">Start a conversation</button>
      </div>}
    </header>
  )
}
