export default class SizeSpecification {
    constructor(size) {
        this.size = size
    }

    isSatisfied(item) {
        return item.size === this.size
    }
}