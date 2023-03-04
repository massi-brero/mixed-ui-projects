
// import {fromEvent, subscribe } from './node_modules/rxjs/dist/types /operators';

const { fromEvent } = rxjs
const { bufferWhen, filter, delay } = rxjs.operators
const btn = document.querySelector('button')
const output = document.querySelector('#output')
const click$ = rxjs.fromEvent(btn, 'click')


click$
    .pipe(
        bufferWhen(() => click$.pipe(
            delay(1000))
        ),
        filter(events => events.length >= 3)
    )
    .subscribe(() => {
        output.textContent = Math.random().toString(36).slice(2)
    })