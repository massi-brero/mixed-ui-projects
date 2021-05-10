export default class ProductFilter {
    filterByColor(products, color) {
        return products.filter(p => p.color === color)
    }
}