// console.log('the ganesh kanawade is here');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter',(req, res) =>{
    res.send('twitter the');
})

app.get('/login',(req, res)=> {
  res.send('<h1>login the in code step by step</h1>')
})

app.get('/youtube',(req, res)=>{
  res.send('<h1><mark>my youtube channel is here</></h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
})


