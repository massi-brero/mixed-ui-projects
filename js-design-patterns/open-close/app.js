import Product from "./Product.js";
import {Color, Size} from "./Enums.js";
import ProductFilter from "./ProductFilter.js";

const apple = new Product('Apple', Color.green, Size.small)
const tree = new Product('Tree', Color.green, Size.large)
const house = new Product('House', Color.blue, Size.large)

const products = [apple, tree, house]

const pf = new ProductFilter()
console.log('green products (old):')
for (const p of pf.filterByColor(products, Color.green)) {
    console.log(`${p.name} is green`)
}