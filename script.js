

function loginPage() {
  // Code to navigate to login page
  document.querySelector('.login-section').style.display = 'block';
}


function login(event) {
  event.preventDefault();
  // Code to login user
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === 'admin' && password === 'admin') {
    alert('Login successful');
  } else {
    alert('Invalid username or password');
  }
}
// script.js
const products = [
    { id: 1, name: "Product 1", price: 100, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 200, image: "product2.jpg" },
    // Add more products here
];

const productGrid = document.getElementById("product-grid");

products.forEach(product => {
    const productHTML = `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button>Add to Cart</button>
            <button>Wishlist</button>
        </div>
    `;
    productGrid.innerHTML += productHTML;
});

// Add to Cart functionality
document.querySelectorAll(".product button:nth-child(4)").forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

// Wishlist functionality
document.querySelectorAll(".product button:nth-child(5)").forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to wishlist!");
    });
});

// Complaint functionality
document.querySelector(".complaint-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Complaint submitted successfully!");
});

// Payment functionality
document.querySelector(".payment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Payment successful!");
});


const checkoutForm = document.querySelector('.checkout-form');

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const location = document.getElementById('location').value;
    const otherLocation = document.getElementById('other-location').value;

    // Store user information in local storage or send it to server
    localStorage.setItem('userInfo', JSON.stringify({
        name,
        address,
        location,
        otherLocation
    }));

    // Place order logic here
    console.log('Order placed successfully!');
});



function setLocation() {
    const input = document.getElementById("location-input").value;
    const display = document.getElementById("user-location");

    if (input.trim() !== "") {
        display.textContent = "📍 " + input;
    } else {
        display.textContent = "📍 Enter your location";
    }
}
// Review Form Submission
const reviewForm = document.getElementById('review-form');
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const rating = document.getElementById('rating').value;
  const review = document.getElementById('review').value;
  // Submit review to server
  console.log('Review submitted:', rating, review);
});

// Complaint Form Submission
const complaintForm = document.getElementById('complaint-form');
complaintForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const complaint = document.getElementById('complaint').value;
  // Submit complaint to server
  console.log('Complaint submitted:', complaint);
});