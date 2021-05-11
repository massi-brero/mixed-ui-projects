export default class ColorSpecification {
    constructor(color) {
        this.color = color
    }

    isSatisfied(item) {
        return item.color === this.color
    }
}