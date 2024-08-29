import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ChildLayout from '../components/childlayout'
import ProductGrid from '../components/Products'

export default function Home() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to Bliss
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Experience Unblemished Joy
        </p>
      </div>

      <div className="relative h-64 sm:h-72 md:h-96 lg:h-[32rem] mb-12">
        
      </div>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900">Discover Our Gramolla Collection</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Indulge in the perfect blend of taste and tradition with our exquisite gramolla products.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Products</h2>
        <ProductGrid linkToProduct={true} />
      </section>
    </>
  )
}
