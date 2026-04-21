import { Link } from "react-router";
import { categories } from "../data";

export default function Categories() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">All Categories</h1>
          <p className="text-purple-100">Browse through our collections</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg h-64 mb-4 shadow-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
