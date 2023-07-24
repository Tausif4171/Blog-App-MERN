const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Test')
})

mongoose.connect('mongodb+srv://tausifkhan4173:786Srtrf7896@cluster0.0nwvlwj.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    try {
        const userDoc = await UserModel.create({ email, password })
        res.json(userDoc)
    }
    catch (e) {
        res.status(400).json(e)
    }
})

app.listen(4000)