import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-yellow-400 mb-12 text-center">CONTACT</h2>
        
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 md:p-12 border-2 border-yellow-400 border-opacity-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-yellow-400 text-3xl mb-2">📱</div>
              <p className="text-gray-400 mb-2">Instagram</p>
              <a href="https://instagram.com/lemon.Farmz" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 font-bold transition">
                @lemon.Farmz
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-yellow-400 text-3xl mb-2">✈️</div>
              <p className="text-gray-400 mb-2">Telegram</p>
              <a href="https://t.me/+OWj2QldiTmM1MTNk" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 font-bold transition">
                Rejoindre le canal
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-yellow-400 text-3xl mb-2">🛒</div>
              <p className="text-gray-400 mb-2">Commandes</p>
              <a href="https://t.me/zz_inconue" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 font-bold transition">
                Message privé
              </a>
            </div>
          </div>

          <div className="border-t border-yellow-400 border-opacity-30 pt-8 mt-8">
            <h3 className="text-white text-xl font-bold mb-4 text-center">📦 PASSER UNE COMMANDE</h3>
            <p className="text-gray-300 text-center mb-6">Cliquez sur le bouton ci-dessous pour envoyer votre commande directement via Telegram</p>
            
            <a 
              href="https://t.me/zz_inconue" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-900 font-black text-xl py-4 rounded-xl hover:shadow-2xl hover:shadow-yellow-400/50 transition transform hover:scale-105 text-center"
            >
              💬 Commander via Telegram
            </a>
          </div>

          <div className="border-t border-yellow-400 border-opacity-30 pt-8 mt-8">
            <h3 className="text-white text-xl font-bold mb-6 text-center">OU REMPLIS LE FORMULAIRE</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-yellow-400 border-opacity-30 focus:border-opacity-100 outline-none transition"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-yellow-400 border-opacity-30 focus:border-opacity-100 outline-none transition"
              />
              <input
                type="text"
                placeholder="Produit et quantité"
                className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-yellow-400 border-opacity-30 focus:border-opacity-100 outline-none transition"
              />
              <textarea
                placeholder="Message supplémentaire"
                rows="4"
                className="w-full bg-slate-600 text-white px-4 py-3 rounded-lg border border-yellow-400 border-opacity-30 focus:border-opacity-100 outline-none transition"
              ></textarea>
              <button 
                type="button"
                onClick={() => {
                  const message = "Nouvelle commande via le site!";
                  window.open(`https://t.me/zz_inconue?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full bg-yellow-400 text-slate-900 font-black py-3 rounded-lg hover:bg-yellow-300 transition"
              >
                ENVOYER LA COMMANDE →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
