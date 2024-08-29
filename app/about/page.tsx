import Head from 'next/head'
import ChildLayout from '../../components/childlayout'

export default function About() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Bliss</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-3xl leading-6 font-medium text-gray-900">Our Story</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Discover the journey of Bliss</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Our Beginning</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Bliss was founded with a passion for bringing unblemished joy to our customers through our exquisite gramolla products. Our journey began in a small kitchen, experimenting with flavors and textures to create the perfect gramolla.
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Our Mission</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                At Bliss, we strive to elevate the gramolla experience by crafting products that delight the senses and bring people together. We are committed to using only the finest ingredients, supporting sustainable practices, and spreading joy one gramolla at a time.
              </dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Our Values</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Quality: We never compromise on the excellence of our products.</li>
                  <li>Innovation: We continuously explore new flavors and techniques.</li>
                  <li>Sustainability: We are dedicated to eco-friendly practices.</li>
                  <li>Community: We believe in fostering connections through shared experiences.</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
