import Specification from "./Specification.js";

export default class ColorSpecification extends Specification {
    constructor(color) {
        super()
        this.color = color
    }

    isSatisfied(item) {
        return item.color === this.color
    }
}