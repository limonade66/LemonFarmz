import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import ProductShowcase from '../components/ProductShowcase'
import ProductGrid from '../components/ProductGrid'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const products = [
  {
    id: 1,
    name: 'Jaune Mousseux',
    category: 'Premium Collection',
    image: '/products/jaune-mousseux.jpg',
    characterImage: '/character/character-holding-product.png',
    video: '/videos/jaune-mousseux.mp4',
    sizes: [
      { weight: '4g', price: 20 },
      { weight: '10g', price: 50 },
      { weight: '25g', price: 100 },
      { weight: '50g', price: 180 },
      { weight: '100g', price: 300 }
    ],
    description: 'Le Jaune Mousseux - Saveur premium et délicate'
  },
  {
    id: 2,
    name: 'Zipette 💎❄',
    category: 'Premium Collection',
    image: '/products/zipette.jpg',
    characterImage: '/character/character-holding-product.png',
    video: '/videos/Chanel.mp4',
    sizes: [
      { weight: '1g', price: 60 },
      { weight: '5g', price: 250 },
      { weight: '10g', price: 420 }
    ],
    description: 'Zipette 💎❄ - Produit exclusif et prestigieux'
  }
]

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <>
      <Head>
        <title>Lemon Farmz - Premium Products</title>
        <meta name="description" content="Lemon Farmz - Your premium lemon products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <ProductShowcase product={selectedProduct} />
        <ProductGrid products={products} onSelectProduct={setSelectedProduct} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
