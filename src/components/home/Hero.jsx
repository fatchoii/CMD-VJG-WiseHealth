import { Link } from "react-router-dom";
import heroImage from "../../assets/images/CMD with box.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 md:flex-row">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted Health & Wellness Products
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900">
            Natural Wellness
            <span className="block text-blue-700">
              Starts Here.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover premium food supplements designed to support your daily
            health with trusted products from CMD Cebu VjG WiseHealth.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 space-y-2 text-gray-700">
            <p>✔ Trusted Wellness Products</p>
            <p>✔ Nationwide Delivery</p>
            <p>✔ Excellent Customer Support</p>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="CMD Products"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}