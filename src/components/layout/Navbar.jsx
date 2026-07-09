import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          CMD WiseHealth
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600 transition-colors">
            Products
          </Link>

          <Link to="/about" className="hover:text-blue-600 transition-colors">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Order Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
          Order Now
        </button>
      </div>
    </nav>
  );
}