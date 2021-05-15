export default class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }

    get width() {
        return this._width
    }

    get height() {
        return this._height
    }
    set width(val) {
        this._width = val
    }

    set height(val) {
        this._height = val
    }

    get area() {
        return this._width * this._height
    }

    isSquare() {
        return this.height === this.width
    }

    toString() {
        return `${this._width}x${this._height}`
    }
}