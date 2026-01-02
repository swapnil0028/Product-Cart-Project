import { useState } from "react";

const productsData = [
  { id: 1, name: "Pen", price: 10, category: "stationery" },
  { id: 2, name: "Book", price: 50, category: "stationery" },
  { id: 3, name: "Headphones", price: 500, category: "electronics" },
  { id: 4, name: "Mouse", price: 300, category: "electronics" },
];

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const item = products.find(p => p.id === id);
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);


  return (
  <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-6">

    {/* App Container */}
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        🛍 Product Store
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          className="px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition font-medium"
          onClick={() => setProducts(productsData)}
        >
          All
        </button>

        <button
          className="px-5 py-2 rounded-full bg-blue-200 hover:bg-blue-300 transition font-medium"
          onClick={() =>
            setProducts(productsData.filter(p => p.category === "stationery"))
          }
        >
          ✏️ Stationery
        </button>

        <button
          className="px-5 py-2 rounded-full bg-pink-200 hover:bg-pink-300 transition font-medium"
          onClick={() =>
            setProducts(productsData.filter(p => p.category === "electronics"))
          }
        >
          🎧 Electronics
        </button>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Products */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-700 mb-5">
            Products
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {products.map(p => (
              <div
                key={p.id}
                className="bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-800">
                    {p.name}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 capitalize">
                    {p.category}
                  </span>
                </div>

                <p className="text-3xl font-extrabold text-purple-600 mt-4">
                  ₹{p.price}
                </p>

                <button
                  className="mt-5 w-full py-2 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
                  onClick={() => addToCart(p.id)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-5">
            Cart
          </h2>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg">
            {cart.length === 0 && (
              <p className="text-gray-500 text-center">
                🛒 Your cart is empty
              </p>
            )}

            <div className="space-y-3">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm bg-white rounded-lg px-3 py-2 shadow-sm"
                >
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-semibold text-gray-800">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span className="text-green-600">₹{total}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);
}