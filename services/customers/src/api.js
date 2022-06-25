import express from 'express';

const app = express()

app.get('/customers', (req, res) => {
    res.send('Proof of concept "customers" API')
})

app.get('/customers/health/status', (req, res) => {
    res.send(200)
})

const PORT = 3002

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))