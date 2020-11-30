const fs = require('fs')

// Read data from file
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.age)


// Write data to file
data.age = 26
data.name = 'Sean'

const newObjectJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json', newObjectJSON)

// const book = {
//     'title': 'Ego is the enemy',
//     'author': 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)