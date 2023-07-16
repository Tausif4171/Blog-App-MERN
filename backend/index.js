const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Test')
})

app.post('/register',(req,res)=>{
    const data = req.body
    console.log(data)
    
    res.status(200).json({
        message:'Registration successful'
    })
})

app.listen(4000)