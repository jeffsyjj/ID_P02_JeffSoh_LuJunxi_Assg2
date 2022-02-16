//Targetting cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let cartClose = document.querySelector("#close-cart");
//Opening cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
}
//Closing cart
cartClose.onclick = () => {
    cart.classList.remove("active");
}

//For cart to work
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//Making Function TO work
function ready(){
    //Removing items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //Quantity change
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // Add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //Buy Button
    function buyButtonClicked()
}
// Remove items from cart
function removeCartItem(event){
    var buttonCliked = event.target;
    buttonCliked.parentElement.remove();
    updateTotal();
}

//Quantity Changes for items
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}
//Add to cart 
function addCartClicked(event){
    var button = event.target;
    var storeProducts = button.parentElement;
    var title = storeProducts.getElementsByClassName("product-title")[0].innerText;
    var price = storeProducts.getElementsByClassName("price")[0].innerText;
    var productImage = storeProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImage);
    updateTotal();
}

function addProductToCart(title, price, productImage) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("product-box");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){
        alert("You have already added this item to cart");
        return;
    }
 }
    var cartBoxContent = `
                            <img src="${productImage}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <!--Remove cart-->
                            <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox
        .getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}
//Updating the total
function updateTotal(){
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartBoxes = cartItems.getElementsByClassName("product-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        // If price is not a whole number
        total = Math.round( total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}
