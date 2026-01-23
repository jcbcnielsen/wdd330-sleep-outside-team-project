import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter(); import ProductList from "./ProductList.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

const listElement = document.querySelector(".product-list");

const productList = new ProductList({
  category: "tents",
  dataSource,
  listElement,
});

productList.init();
