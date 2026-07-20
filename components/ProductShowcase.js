import React, { useState } from 'react'

export default function ProductShowcase({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche - Caractère 3D */}
        <div className="relative h-96 lg:h-full flex items-center justify-center">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-yellow-400 border-opacity-50 shadow-2xl shadow-yellow-400/50">
            {/* Image de fond épique */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(\'/backgrounds/epic-background.jpg\')',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/60"></div>
            </div>

            {/* Caractère 3D tenant le produit */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/character/character-holding-product.png" 
                alt="Character holding product" 
                className="h-full w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Bouton vidéo overlay */}
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="absolute top-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 transition shadow-lg hover:shadow-yellow-400/50"
            >
              <span className="text-xl">▶</span> VID
            </button>
          </div>

          {/* Modal vidéo */}
          {showVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
              <div className="relative w-full h-full md:w-3/4 md:h-3/4 flex items-center justify-center">
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-yellow-400 transition z-10"
                >
                  ✕
                </button>
                <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center overflow-hidden">
                  <video
                    width="100%"
                    height="100%"
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                    src={product.video}
                  >
                    Votre navigateur ne supporte pas la lecture vidéo
                  </video>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Colonne droite - Détails */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-yellow-400 mb-2">{product.name}</h1>
            <p className="text-yellow-300 text-lg font-semibold">Premium Collection</p>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">{product.description}</p>
          </div>

          {/* Sélection des tailles */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">📦 Sélectionner la Quantité</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.sizes.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`p-4 rounded-xl font-bold text-lg transition border-2 ${
                    selectedSize.weight === size.weight
                      ? 'bg-yellow-400 text-slate-900 border-yellow-400 shadow-lg shadow-yellow-400/50'
                      : 'bg-slate-800 text-yellow-400 border-yellow-400 border-opacity-30 hover:border-opacity-100'
                  }`}
                >
                  <div>{size.weight}</div>
                  <div className="text-2xl text-yellow-300 mt-1">{size.price}€</div>
                </button>
              ))}
            </div>
          </div>

          {/* Bouton ajouter au panier */}
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-900 font-black text-xl py-4 rounded-xl hover:shadow-2xl hover:shadow-yellow-400/50 transition transform hover:scale-105">
            🛒 Ajouter au panier - {selectedSize.price}€
          </button>
        </div>
      </div>
    </section>
  )
}
