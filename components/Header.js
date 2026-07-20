import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-slate-900 bg-opacity-95 backdrop-blur-md z-50 border-b border-yellow-400 border-opacity-30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Lemon Farmz" className="h-12 w-12" />
          <span className="text-2xl font-bold text-yellow-400">LEMON FARMZ</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="#accueil" className="text-white hover:text-yellow-400 transition">ACCUEIL</a>
          <a href="#produits" className="text-white hover:text-yellow-400 transition">PRODUITS</a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition">CONTACT</a>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yellow-400 text-2xl"
        >
          ☰
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-yellow-400 border-opacity-30">
          <a href="#accueil" className="block px-4 py-2 text-white hover:text-yellow-400">ACCUEIL</a>
          <a href="#produits" className="block px-4 py-2 text-white hover:text-yellow-400">PRODUITS</a>
          <a href="#contact" className="block px-4 py-2 text-white hover:text-yellow-400">CONTACT</a>
        </div>
      )}
    </header>
  )
}
