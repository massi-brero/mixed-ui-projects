import Specification from "./Specification.js";

export default class SizeSpecification extends Specification{
    constructor(size) {
        super()
        this.size = size
    }

    isSatisfied(item) {
        return item.size === this.size
    }
}