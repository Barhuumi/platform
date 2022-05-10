const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/health/status', (req,res) => {
    res.send(200)
})

const PORT = 3001

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))