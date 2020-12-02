const { response } = require('express')
const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Index Page')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 23,
        location: 'Durban'
    })
})

// Start the server
app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})