const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello Bhathiya');
});

app.get('/blog', (req,res) => {
    res.send('Hello Prasai');
})

app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
});

// app.listen(3000);