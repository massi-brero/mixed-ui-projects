import fs from 'fs';
import PersistenceManager from "./PersistenceManager.js";
import Journal from "./Journal.js";

const j = new Journal()
j.add('i laughed today')
j.add('i walked today')
j.add('i learned stuff today')
console.log(j.toString())
const nJournal = PersistenceManager.preprocessJournal(j.toString())
PersistenceManager.save('test1', j)
PersistenceManager.save('test2', nJournal)
console.log(nJournal)