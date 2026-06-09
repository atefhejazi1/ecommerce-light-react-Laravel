export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-gray-200">
        <img
          src={`http://127.0.0.1:8000/storage/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-600">
            ${product.price}
          </span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
