const express = require('express');
const cors = require('cors');
const multer = require('multer')
const uploadFiles = multer({ dest: 'uploads/' })
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const secret = 'Tausif4171'
const fs = require('fs')
// const saltRounds = bcrypt.genSalt(10)
const app = express()

app.use(cors({ credentials: true, origin: 'http://localhost:3001' }))
app.use(express.json())
app.use(cookieParser())

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
    const { email, password } = req.body;
    console.log(email, password);

    try {
        const userDoc = await UserModel.findOne({ email });

        if (!userDoc) {
            // If userDoc is null (user not found), handle the error accordingly
            return res.status(404).json({ error: 'User not found.' });
        }

        // Now you can proceed with the password check
        const passwordCheck = bcrypt.compareSync(password, userDoc.password);

        if (passwordCheck) {
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
    } catch (err) {
        // Handle any other errors that might occur during the database query
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database error.' });
    }
});

app.get('/profile', (req, res) => {
    const { userToken } = req.cookies;
    console.log('Received token:', userToken);

    jwt.verify(userToken, secret, {}, (err, info) => {
        if (err) {
            // Handle the error if JWT verification fails
            return res.status(401).json({ error: 'Unauthorized.' });
        } else {
            console.log('Decoded user token payload:', info);
            return res.json(info);
        }
    });
});

app.post('/create', uploadFiles.single('files'), (req, res) => {
    const { originalname, path } = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    console.log({ originalname }, { parts }, { ext })
    console.log(req.file)
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)
    res.json({ 'file': req.file })
})

app.post('/logout', (req, res) => {
    res.cookie('userToken', '').json({ success: true })
})


app.listen(4000)