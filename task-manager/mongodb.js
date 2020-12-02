// Crud Operations
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new Object()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database")
    } 

    const db = client.db(databaseName)

    // Fetch data out of database
    // db.collection('users').findOne({ _id: new ObjectID("5fc68b2aedf99142c8218eb8")}, (error, user) => {
    //     if (error) {
    //         return console.log(error)
    //     }

    //     console.log(user)
    // })

    // Fetch multiiple users
    // db.collection('users').find({ age: 26 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 26 }).count((error, count) => {
    //     console.log(count)
    // })

    // Challenge
    // db.collection('tasks').findOne({ _id: new ObjectID("5fc68df70b036a0dbc0178e6")}, (error, task) => {
    //     if (error) {
    //         return console.log(error)
    //     }

    //     console.log(task)
    // })

    db.collection('tasks').find({ completed: false }, (error, tasks) => {
        if (error) {
            return console.log(error)
        }

        tasks.forEach(task => {
            console.log(task)
        });
    })

    // db.collection('users').insertOne({
    //     name: 'Tim',
    //     age: 40
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user")
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: '28'
    //     },
    //     {
    //         name: 'Laura',
    //         age: 29
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert users")
    //     }

    //     console.log(result.ops)
    // })

    // Insert multiple tasks
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Grocery List',
    //         completed: false
    //     },
    //     {
    //         description: 'Grocery List - 2',
    //         completed: false
    //     },
    //     {
    //         description: 'Grocery List - 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert tasks")
    //     }

    //     console.log(result.ops)
    // })


})