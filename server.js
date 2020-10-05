//Budget API

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const fs = require('fs')


app.use(cors());

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
    console.log(`API serverd at http//:localhost${port}`)
});