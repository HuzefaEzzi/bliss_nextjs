import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

interface ProductGridProps {
  linkToProduct?: boolean;
}

import { useState } from 'react';
const products = [
    { id: 1, name: 'Pecan Granola', image: '/pecan.jpg', description: 'Experience the rich flavors'  },
    { id: 2, name: 'Choclate Granola', image: '/choclate.jpg', description: 'Experience the rich flavors' },
    { id: 3, name: 'Lemon Berry Granola', image: '/lemonberry.jpg', description: 'Experience the rich flavors' },
    { id: 4, name: 'Pista Bar', image: '/pista-bar.jpg', description: 'Experience the rich flavors' },
  ];
export default function ProductGrid({ linkToProduct = false }: ProductGridProps) {
 
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                {linkToProduct ? (
                  <Link href="/products" className="font-medium text-gray-900">
                    {product.name}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-900">{product.name}</span>
                )}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
