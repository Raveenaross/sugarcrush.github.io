document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const checkTotalButton = document.getElementById("check-total-btn");

    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const item = button.closest("figure");
            const itemName = item.querySelector(".item-name").textContent;
            const itemPrice = parseFloat(item.querySelector(".item-price").textContent.replace("₹", ""));

            // Create item object
            const cartItem = {
                name: itemName,
                price: itemPrice
            };

            // Retrieve existing cart items from localStorage or initialize empty array
            let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

            // Add new item to cartItems array
            cartItems.push(cartItem);

            // Save cartItems back to localStorage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

        });
    });
    if (checkTotalButton) {
        checkTotalButton.addEventListener("click", function() {
            window.location.href = "total.html";
        });
    } else {
        console.error("Check Total button not found.");
    }
});
