import express from 'express';

import { createAsset } from './lib/assets/create-asset.js'

const app = express()

app.get('/inventory', (req, res) => {
    res.send('Proof of concept API')
})

app.post('/inventory/asset', createAsset)

app.get('/inventory/health/status', (req, res) => {
    res.send(200)
})

const PORT = 3001

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))