const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = 'Tausif4171'
// const saltRounds = bcrypt.genSalt(10)
const app = express()

app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))
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
        console.log('test');
        jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) {
                // Handle the error if JWT signing fails
                return res.status(500).json({ error: 'Failed to generate token.' });
            } else {
                // Set the generated token as a cookie in the response
                return res.cookie('userToken', token).json({ success: true });
            }
        });
    } else {
        // Respond with an error message for wrong credentials
        res.status(400).json({ error: 'Wrong credentials.' });
    }
})

app.listen(4000)