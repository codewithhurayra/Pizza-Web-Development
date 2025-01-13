// Show the loading screen and hide it after a delay
function showLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");

  // Hide the loading screen after a delay
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 1500); // 1.5 seconds delay
}

// Call the function when the page loads
window.onload = () => {
  showLoadingScreen();
  renderDeals(); // Ensure deals are rendered after the loading animation
};

// Initialize the cart array
let cart = [];

// Function to add items to the cart
function cartorder(itemName, itemPrice) {
  // Add the selected item to the cart
  cart.push({ name: itemName, price: itemPrice });

  // Update the cart count in the navbar
  document.getElementById("cart-count").textContent = cart.length;

  alert(`${itemName} has been added to your cart!`);
}

// Function to redirect to WhatsApp with the order details
function showCart() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  // Generate the WhatsApp message
  let message = "Hi, I want to order the following items:\n";
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ${item.price}RS\n`;
  });

  // Your WhatsApp number
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

  // Redirect to WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}
