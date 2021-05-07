export default  class Bimd {
    inputElms = document.querySelectorAll('[v3-model]')
    boundElms = document.querySelectorAll('[v3-bind]')
    scope = {}

    static init() {
        for (const elm of inputElms) {
            if (elm.type === 'text') {
                const prop = elm.getAttribute('v3-model')

                elm.addEventListener('keyup', (e) => {
                    scope[prop] = elm.value
                })

                this.setPropUpdate(prop)
            }
        }
    }

    setPropUpdate(prop) {
        if (!scope.hasOwnProperty(prop)) {
            let value
            Object.defineProperty(scope, prop, {
                set: (newVal) => {
                    let val = newVal

                    for (const input of inputElms) {
                        if (input.getAttribute('v3-model') === prop) {
                            if (input.type) {
                                input.value = newVal
                            }
                        }
                    }

                    for (const bound of boundElms) {
                        if (bound.getAttribute('v3-bind') === prop) {
                            if (!bound.type) {
                                bound.innerHTML = newVal
                            }
                        }
                    }
                },
                get: () => {
                    return value
                },
                enumerable: true,
            })
        }
    }
}