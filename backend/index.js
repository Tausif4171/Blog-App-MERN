const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Test')
})

app.post('/register', (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    res.status(200).json({
        message: 'Registration successful',
        requestedData: { email, password }
    })
})

app.listen(4000)