
export default class Journal {
    count = 0
    entries = []

    constructor(props) {

    }

    add(text) {
        ++this.count
        this.entries[this.count] = `${this.count}: ${text}`

        return this.count
    }

    remove(idx) {
        delete this.entries[idx]
    }

    toString() {
        return Object.values(this.entries).join("\n")
    }

}