import Rectangle from './Rectangle.js'
import Square from "./Square.js";


const useIt = (rc) => {
    const width = rc.width
    let area = null
    rc.height = 10

    if (!rc.isSquare()) {
        area = rc.height * width * 1 // (or some calculating for not square rectangles)
    } else {
        area = rc.height * rc.height
    }
    console.log(`expected area ${area}`)
    console.log(`got ${rc.area}`)
}

const rc = new Rectangle(2,3)
console.log(rc.area)
useIt(rc)
console.log('--------------------------')

const sq = new Square(5)
console.log(sq.toString())
sq.width = 8
console.log(sq.toString())
useIt(sq)

