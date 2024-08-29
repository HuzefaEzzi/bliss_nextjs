import ProductGrid from '../../components/Products'

const products = [
  { id: 1, name: 'Gramolla Classic 1', image: '/gramolla-1.jpg', price: '$29.99', description: 'Experience the rich flavors' },
  { id: 2, name: 'Gramolla Classic 2', image: '/gramolla-2.jpg', price: '$29.99', description: 'Experience the rich flavors' },
  { id: 3, name: 'Gramolla Classic 3', image: '/gramolla-3.jpg', price: '$29.99', description: 'Experience the rich flavors' },
]

export default function Products() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Our Gramolla Products</h1>
      <ProductGrid />
    </>
  )
}
