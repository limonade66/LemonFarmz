import React from 'react'

export default function ProductGrid({ products }) {
  return (
    <section id="produits" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-yellow-400 mb-12 text-center">NOS PRODUITS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden border-2 border-yellow-400 border-opacity-30 hover:border-opacity-100 transition cursor-pointer hover:shadow-2xl hover:shadow-yellow-400/30"
            >
              <div className="aspect-square bg-cover bg-center relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-300 font-bold">À partir de {product.sizes[0].price}€</span>
                  <button className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition">
                    Voir →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
