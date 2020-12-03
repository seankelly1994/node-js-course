const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// Call
// add(2, 4).then((sum) => {
//     console.log(sum)
// }).catch((e) => {
//     console.log(e)
// })

// Promise chaining
add(1, 2).then((sum) => {
    console.log(sum)

    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})