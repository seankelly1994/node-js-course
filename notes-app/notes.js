const { default: chalk } = require('chalk')
const fs = require('fs')
const { title } = require('process')

const getNotes = () => {
    return 'My Notes ...'
}

// This function adds a new note
const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (! duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New Note Added')
    } else {
        console.log('Note title taken')
    }
}

// This function removes a note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    const notesToRemove = notes.filter((note) => note.title === title)


    if (notesToRemove.length > 0) {
        saveNotes(notesToKeep)
        const success = chalk.green.bold;
        console.log(success('Note with title: ' + notesToRemove[0].title + ' removed.'))
    } else {
        const error = chalk.red.bold;
        console.log(error("No note with title: " + title + " found!"))
    }
}

// This function list the notes
const listNotes = () => {
    const notes = loadNotes()

    display = chalk.blue.bold;

    console.log(display('Your Notes'))

    notes.forEach(note => {
        console.log("Title: " + note.title)
    });
}

// This function is used to read note
const readNote = (title) => {
    const notes = loadNotes()

    const foundNote = notes.find((note) => note.title === title)

    if (foundNote) {
        success = chalk.green.bold
        console.log(success('Note Found'))
        console.log("Title: " + foundNote.title)
        console.log("Body: " + foundNote.body)
    } else {
        error = chalk.red.bold
        console.log(error("No Note Found"))
    }
}

// These functions are used within other functions
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
    
        return JSON.parse(dataJSON)   
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}