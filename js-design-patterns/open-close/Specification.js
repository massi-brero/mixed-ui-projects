export default class Specification {
    constructor(color) {
        if(this.constructor === 'Specification') {
            throw new Error('Specification is abstract')
        }}

    isSatisfied(item) {}
}