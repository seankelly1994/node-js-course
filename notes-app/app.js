// const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('TItle: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('List the notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    handler: function () {
        console.log('Read the notes')
    }
})


// console.log(yargs.argv)
yargs.parse()

// add, remove, read, list