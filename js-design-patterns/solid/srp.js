import fs from 'fs';

class Journal {
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

    save(filename) {
        fs.write(filename, this.toString())
    }

    load() {
        // not implemented
    }

    loadFromUrl() {
        // not implemented
    }
}

const j = new Journal()


j.add('i laughed today')
j.add('i walked today')
j.add('i learned stuff today')
console.log(j.toString())