import fs from "fs";

export default class PersistenceManager {
    static preprocessJournal(journalAsString) {
        let normalizedEntries = []
        journalAsString.split('\n').forEach(entry => {
            let entryArr = entry.split(': ')
            delete entryArr[0]
            normalizedEntries.push(`${entryArr.join('').trim()}\n`)
        })
        return normalizedEntries
    }

    static save(filename, journal) {
        fs.writeFileSync(filename, journal.toString())
    }

    static load() {
        // not implemented
    }

    static loadFromUrl() {
        // not implemented
    }

}