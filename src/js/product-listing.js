import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";
import { loadHeaderFooter, getParam } from './utils.mjs';

loadHeaderFooter();

const category = getParam('category')
const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");

const productList = new ProductList({
    category,
    dataSource,
    listElement,
});

productList.init();