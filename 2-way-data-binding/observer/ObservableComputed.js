import Observable from "./Observable.js";

/**
 * is read-only
 */
export default class ObservableComputed extends Observable{
    constructor(computingFn, deps) {
        super(computingFn())
        this.injectListenerIntoDeps(computingFn, deps)
    }

    injectListenerIntoDeps(fn, deps) {
        const listener = () => {
            this.$value = fn()
            this.notify() // entspricht next()
        }
        deps.forEach(dep => dep.subscribe(listener))
    }

    get value() {
        return this.$value
    }
    set value(_) {
        console.log('cannot set computed property')
    }
}

const first = new Observable('Joe')
const second = new Observable('BFlat')
const full = new ObservableComputed(
    () => `${first.value} ${second.value}`.trim(), [first, second]
)
console.log(full.value)
first.value = 'Jack'
console.log(full.value)