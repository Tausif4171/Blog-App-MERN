const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Test')
})

app.post('/register',(req,res)=>{    
    res.status(200).json({
        message:'Registration successful'
    })
})

app.listen(4000)