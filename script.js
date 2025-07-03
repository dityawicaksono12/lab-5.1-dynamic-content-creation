const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

addProductButton.addEventListener("click", function(){
    let productname = productNameInput.value
    let productprice = parseFloat(productPriceInput.value)
    let li = document.createElement("li")
    let removebutton = document.createElement("button")
    removebutton.textContent = "Remove"
    li.textContent = `${productname} - $${productprice.toFixed(2)} `
    li.dataset.price = productprice
    li.appendChild(removebutton)
    cart.appendChild(li)
    updateTotalPrice(productprice)
    
    removebutton.addEventListener("click", removeItem)

})