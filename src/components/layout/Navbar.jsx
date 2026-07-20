import { Link } from "react-router-dom";
import logo from "../../assets/logo/cmdlogo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CMD Cebu VjG WiseHealth"
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h1 className="text-lg font-bold text-blue-700">
              CMD Cebu VjG WiseHealth
            </h1>

            <p className="text-xs text-gray-500">
              Wellness • Nutrition • Health
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="transition hover:text-blue-600">
            Products
          </Link>

          <Link to="/about" className="transition hover:text-blue-600">
            About
          </Link>

          <Link to="/contact" className="transition hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
          Order Now
        </button>
      </div>
    </nav>
  );
}