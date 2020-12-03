require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndRemove('5fc73eb2b2f9a459940cc712').then((task) => {
    console.log(task)

    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})