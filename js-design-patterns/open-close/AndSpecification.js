import Specification from "./Specification.js";

export default class AndSpecification extends Specification{
    constructor(...specs) {
        super()
        this.specs = specs
    }

    isSatisfied(item) {
        return this.specs.every(spec => spec.isSatisfied(item))
    }
}