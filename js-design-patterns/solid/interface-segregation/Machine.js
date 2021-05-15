export default class Machine {
    constructor() {
        if (this.constructor.name === 'Machine') {
            throw new Error('Machine is abstract!')
        }
    }
}