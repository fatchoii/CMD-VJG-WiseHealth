import ProductCard from "../ui/ProductCard";
import { products } from "../../data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Products
          </span>

          <h2 className="mt-5 text-4xl font-bold">
            Featured Products
          </h2>

          <p className="mt-4 text-gray-600">
            Explore our trusted wellness products designed to support your everyday health.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}