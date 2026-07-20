export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto h-60 object-contain p-6"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            {product.price}
          </span>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            View
          </button>
        </div>
      </div>
    </div>
  );
}