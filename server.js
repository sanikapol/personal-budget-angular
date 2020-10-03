const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')

app.use('/',express.static('public'));


app.get('/hello', (req,res) => {
    res.send("Hello World");
});

app.get('/budget', (req,res) => { 
    try{
        const dataBuffer = fs.readFileSync('budget.json')
        console.log(dataBuffer)
        const budget = JSON.parse(dataBuffer);
        console.log(budget)
        res.json(budget);
    }catch (err){
        console.log(err)
        res.send("Something went wrong")
    }
    
});

app.listen(port, () => {
    console.log(`Example app listening at http//:localhost${port}`)
});