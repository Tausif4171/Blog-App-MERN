const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = 'Tausif4171'
// const saltRounds = bcrypt.genSalt(10)
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
        const saltRounds = await bcrypt.genSalt(10) // Wait for the promise to resolve
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        console.log(saltRounds, hashedPassword)
        const userDoc = await UserModel.create({ email, password: hashedPassword })
        res.json(userDoc)
    }
    catch (e) {
        res.status(400).json(e)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    const userDoc = await UserModel.findOne({ email })
    // res.json(userDoc)
    const passwordCheck = bcrypt.compareSync(password, userDoc.password)
    // res.json(passwordCheck)
    if (passwordCheck) {
        jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) {
                return err
            }
            else {
                res.json(token)
            }
        })
    }
})

app.listen(4000)