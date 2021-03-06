require('./db/mongoose')
const express = require('express')
const User = require('./models/user')
const Task = require('./models/task')
const { response } = require('express')
const { findById } = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// To create a new user
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    
    // user.save().then(() => {
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(400)
    //     res.send(e)
    // })
})

// To fetch multiple users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({ })
        res.status(200).send(users)
    } catch(e) {
        res.status(400).send(e)
    }

    // User.find({}).then((users) => {
    //     res.status(200).send(users)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

// To fetch one user
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if(!user) {
            res.status(404).send()
        }

        res.status(200).send(user)

    } catch (e) {
        res.status(500).send(e)
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.status(200).send(user)

    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

// To update a user
app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates!'})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if (!user) {
            res.status(404).send()
        }

        res.status(200).send(user)

    } catch (e) {
        res.status(500).send(e)
    }
})

// To create a new task
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(500).send(e)
    }

    // task.save().then(() => {
    //     res.status(201)
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

// To fetch multiple tasks
app.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((tasks) => {
    //     res.status(200).send(tasks)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

// To fetch one task
app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        if (!task) {
            res.status(404).send()
        }

        res.status(200).send(task)
    } catch (e) {
        res.status(500).send()
    }

    // Task.findById(_id).then((task) => {
    //     if(!task) {
    //         return res.status(404).send()
    //     }

    //     res.status(200).send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

// To update a task
app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description', 'completed']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates!'})
    }

    const _id = req.params.id

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
        })

        if (!task) {
            res.status(404).send('Task not found!')
        }

        res.status(200).send(task)

    } catch (e) {
        res.status(400).send(e)
    }
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

