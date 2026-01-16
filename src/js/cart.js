import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (!cartItems) {
    return
  }
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  document.querySelector(".hide").classList.remove("hide");
  const total = document.querySelector(".calculated-total");
  total.textContent = `$${calculateCartTotal(cartItems)}`

}

function cartItemTemplate(item) {
  if (!item) {
    return
  }
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function calculateCartTotal(items) {

  let total = 0;
  for (const i of (items || [])) {
    if (!i || i.FinalPrice == null) continue;
    total += Number(i.FinalPrice) || 0;
  }
  return total;

}

renderCartContents();
