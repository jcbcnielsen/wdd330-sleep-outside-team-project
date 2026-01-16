import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    async init() {
        // get the details fror the product from the dataSource
        this.product = await this.dataSource.findProductById(this.productId);
        // use the product details to render the HTML for the page
        this.renderProductDetails();
        // add the function to add the product to the cart to the button
        document.getElementById('addToCart').addEventListener('click', this.addProductToCart.bind(this));
    }
    addProductToCart() {
        const existing = getLocalStorage("so-cart") || [];
        const cart = Array.isArray(existing) ? existing : existing ? [existing] : [];
        cart.push(this.product);
        setLocalStorage("so-cart", cart);
    }
    renderProductDetails() {
        document.querySelector('h2').textContent = this.product.Brand.Name;
        document.querySelector('h3').textContent = this.product.NameWithoutBrand;

        const productImage = document.getElementById('productImage');
        productImage.src = this.product.Image;
        productImage.alt = this.product.NameWithoutBrand;

        document.getElementById('productPrice').textContent = this.product.FinalPrice;
        document.getElementById('productColor').textContent = this.product.Colors[0].ColorName;
        document.getElementById('productDesc').innerHTML = this.product.DescriptionHtmlSimple;

        document.getElementById('addToCart').dataset.id = this.productId;
    }
}