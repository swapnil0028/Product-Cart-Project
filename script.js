const products = [
  { id: 1, name: "Pen", price: 10, category: "stationery" },
  { id: 2, name: "Book", price: 50, category: "stationery" },
  { id: 3, name: "Headphones", price: 500, category: "electronics" },
  { id: 4, name: "Mouse", price: 300, category: "electronics" }
];

const productList = document.getElementById("product-list");

function renderProducts(items) {
  productList.innerHTML = items.map(p => `
    <div style="border:1px solid #ccc; padding:10px; margin:10px;">
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <p>Category: ${p.category}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}


// Initial render
renderProducts(products);


function filterProducts(category) {
  if (category === "all") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
}


let cart = [];

const cartList = document.getElementById("cart-list");

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = cart.map(item => `
    <p>${item.name} - ₹${item.price}</p>
  `).join("");

  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  totalEl.textContent = total;
}
