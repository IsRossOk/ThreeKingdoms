const cartItems = []; //array for cart items
//references to HTML elements to display cart items/total
const cartList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

//click event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const itemContainer = button.closest('.shop-item'); //find closest parent container for shop item
        const itemName = itemContainer.querySelector('span').innerText; //get item name from <span> inside shop item
        const itemPrice = parseFloat(itemContainer.dataset.price); //get item price from data-price attribute, convert to number

        addToCart(itemName, itemPrice);
    });
});

//add item to cart array and re-render cart
function addToCart(name, price) {
    cartItems.push({ name, price }); //new object to cartItems array
    renderCart(); //update display
}

//render cart contents in HTML
function renderCart() {
    cartList.innerHTML = ''; //clear current list
    let total = 0; //initialise cart price

    cartItems.forEach((item, index) => {
        total += item.price; //add price to total
        const li = document.createElement('li'); //new <li> element for cart item
        //set HTML for list item, including remove button
        li.innerHTML = `
            <span>${item.name} - €${item.price.toFixed(2)}</span>
            <button class="remove-item-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartList.appendChild(li); //Add <li> to cart list in HTML
    });

    cartTotal.innerText = total.toFixed(2);  //update total displayed in cart
}

//remove item from cart by index
function removeItem(index) {
    cartItems.splice(index, 1); //remove one item at each index
    renderCart();
}

//checkout functionality
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        //alert for empty cart
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("✅ Checkout successful! Thank you for your purchase.");
        cartItems.length = 0; //clear array
        renderCart(); //re-render empty cart
    });
}

// magnify code reused here, when attaching multiple js pages an error occurred where, once an image was magnified and closed again, no more would be clickable. This fixed it for some reason.
document.querySelectorAll('a.magnify').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); //prevent default behavior of <a> (navigate to href)
        const imgSrc = this.getAttribute('href'); //get URL of image from href
        const modal = document.createElement('div'); //new <div> to act as modal overlay
        modal.style.cssText = `
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex; align-items: center; justify-content: center;
            cursor: zoom-out; z-index: 9999;
        `;
        const img = document.createElement('img'); //new <img> for enlarged image
        img.src = imgSrc;
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        modal.appendChild(img); //add image inside modal <div>
        document.body.appendChild(modal); //append modal to <body> so it appears on page

        modal.addEventListener('click', () => modal.remove()); //click event so clicking closes modal 
    });
});