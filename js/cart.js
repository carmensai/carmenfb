const BtnProducts = document.querySelectorAll('.addcartbutton');
const cart = document.getElementById('cart');
const totalElement = document.getElementById('total');
const cartOverlay = document.querySelector('.cart-overlay');
const closeBtn = document.querySelector('.cart-close-button');
const cartNav = document.getElementById('cartLink');

const selectedItems = {};

function addtocart() {
  BtnProducts.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      handleProductClick(event);
      document.body.classList.add('cart-opened');
    });
  });
}

function handleProductClick(event) {
  const button = event.target;
  const productId = button.dataset.id;
  const productName = button.dataset.name;
  const productPrice = parseFloat(button.dataset.price);

  if (!selectedItems[productId]) {
    selectedItems[productId] = {
      name: productName,
      price: productPrice,
      quantity: 1
    };
  } else {
    selectedItems[productId].quantity += 1;
  }

  updateCartDisplay();
  updateTotal();
}

function updateCartDisplay() {
  cart.innerHTML = '';
  for (const id in selectedItems) {
    const item = selectedItems[id];
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cart.appendChild(itemElement);
  }
}

function updateTotal() {
  let total = 0;
  for (const id in selectedItems) {
    total += selectedItems[id].price * selectedItems[id].quantity;
  }
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Show cart on nav click
cartNav.addEventListener('click', () => {
  document.body.classList.add('cart-opened');
});

// Close cart
closeBtn.addEventListener('click', () => {
  document.body.classList.remove('cart-opened');
});

// Initialize
document.addEventListener('DOMContentLoaded',  addtocart);
