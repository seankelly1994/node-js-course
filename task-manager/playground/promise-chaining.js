require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

//5fc73d82595f0a4cd8c08128
// User.findByIdAndUpdate('5fc73d82595f0a4cd8c08128', { age: 1}).then((user) => {
//     console.log(user)

//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// Function to update age and count
// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     const count = await User.countDocuments({ age })

//     return count
// }

// updateAgeAndCount('5fc73d82595f0a4cd8c08128', 26).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })


// Function to remove a task and count
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({ completed: false })

    return task, count
}

deleteTaskAndCount('5fc747c4cdf5c158e86ad6ae').then((task, count) => {
    console.log(count)
    console.log(task)
}).catch((e) => {
    console.log(e)
})

