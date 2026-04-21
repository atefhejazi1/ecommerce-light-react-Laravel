export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">ShopHub</h3>
            <p className="text-gray-400">
              Your destination for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-purple-400 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-purple-400 transition">
                  Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-purple-400"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
