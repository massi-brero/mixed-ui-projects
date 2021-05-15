import Product from './Product.js'
import { Color, Size } from './Enums.js'
import ProductFilter from './ProductFilter.js'
import BetterFilter from './BetterFilter.js'
import ColorSpecification from "./ColorSpecification.js";
import SizeSpecification from "./SizeSpecification.js";
import AndSpecification from "./AndSpecification.js";

const apple = new Product('Apple', Color.green, Size.small)
const tree = new Product('Tree', Color.green, Size.large)
const house = new Product('House', Color.blue, Size.large)

const products = [apple, tree, house]

const pf = new ProductFilter()
console.log('green products (old):')
for (const p of pf.filterByColor(products, Color.green)) {
	console.log(`${p.name} is green`)
}

const bf = new BetterFilter()
console.log('green products (new):')
for (const p of bf.filter(products, new ColorSpecification(Color.green))) {
    console.log(`${p.name} is green`)}

console.log('green and large products (new):')
for (const p of bf.filter(products, new AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large)))) {
    console.log(`${p.name} is green and large`)}
