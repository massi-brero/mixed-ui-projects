export default class Observable {
    $listeners = []
    $value = null

    constructor(value) {
        this.$value = value
    }

    notify() {
        this.$listeners.forEach(listener => {
            listener(this.$value)
        })
    }

    subscribe(listener) {
        this.$listeners.push(listener)
    }

    get value() {
        return this.$value
    }

    set value(value) {
        if (value !== this.$value) {
            this.$value = value
            this.notify()
        }
    }
}