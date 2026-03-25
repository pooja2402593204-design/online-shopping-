/ Selecting elements from the DOM
Const cartCountElement = document.getElementById(‘cart-count’);
Const addButtons = document.querySelectorAll(‘.add-btn’);
Let currentCartCount = 0;
// Adding event listeners to buttons
addButtons.forEach(button => {
 button.addEventListener(‘click’, () => {
 // Increment logic
 currentCartCount++;

 // Update the UI
 cartCountElement.innerText = currentCartCount;

 // Feedback animation
 Button.innerText = “Added!”;
 Button.style.backgroundColor = “#27ae60”;

 setTimeout(() => {
 button.innerText = “Add to Cart”;
 button.style.backgroundColor = “#3498db”;
 }, 800);
 });
});
