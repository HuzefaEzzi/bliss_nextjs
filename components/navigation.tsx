import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-gray-600 hover:text-gray-900">
            Products
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="text-gray-600 hover:text-gray-900">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
