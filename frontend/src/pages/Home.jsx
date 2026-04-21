import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data";

export default function Home() {
  const featuredProducts = products.slice(0, 8);
  const previewCategories = categories.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Discover amazing products at unbeatable prices
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Categories</h2>
          <Link
            to="/categories"
            className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2"
          >
            View All
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewCategories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Featured Products</h2>
          <Link
            to="/products"
            className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2"
          >
            View All Products
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-100 my-16 py-12 px-4 rounded-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special Offer - Get 20% Off!
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Subscribe to our newsletter for exclusive deals and updates
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
