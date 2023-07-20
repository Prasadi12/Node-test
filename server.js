const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello Prasadi...!');
});

app.listen(port, ()=>{
    console.log(`Node app is running on port ${port}`)
});

