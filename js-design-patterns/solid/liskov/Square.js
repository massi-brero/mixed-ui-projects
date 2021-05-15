import Rectangle from './Rectangle.js'

export default class Square extends Rectangle {
	constructor(size) {
		super(size, size)
	}

	set width(val) {
		this._width = this._height = val
	}

	set height(val) {
		this._width = this._height = val
	}

	get width() {
		return this._width
	}

	get height() {
		return this._height
	}
}
