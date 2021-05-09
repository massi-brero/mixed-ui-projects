import Observable from "./Observable.js";
import ObservableComputed from "./ObservableComputed.js";

const bindInput = (input, observable) => {
    input.value = observable.value
    observable.subscribe(() => { input.value = observable.value })
    input.addEventListener('keyup', function () {
        observable.value = this.value
    })
}

const bindings = {}

const app = () => {
    bindings.first = new Observable('Joe')
    bindings.last = new Observable('BFlat')
    bindings.full = new ObservableComputed(
        () => `${bindings.first.value} ${bindings.last.value}`.trim(), [bindings.first, bindings.last]
    )
    applyBindings()
}

setTimeout(app, 0)

const applyBindings = () => {
    document.querySelectorAll('[data-bind]').forEach(elem => {
        const obs = bindings[elem.getAttribute('data-bind')]
        bindInput(elem, obs)
    })
}
