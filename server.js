const PORT = 8000
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json('hi')
})

app.get('/jokes', async (req, res) => {

    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.REACT_APP_KEY
            }
        }

        const response = await fetch("https://api.api-ninjas.com/v1/dadjokes", options)
        const json = await response.json()
        res.json(json)
        // setJoke(json[0].joke)
    } catch (error) {
        console.log(error)
    }
})

app.listen(8000, () => console.log(`Backend is running on ${PORT}`))