document.getElementById("orderForm").onsubmit = function(e) {
e.preventDefault();
document.getElementById("message").innerHTML =
"Your order was successful! Thank you.";
this.reset();
};

