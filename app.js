const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/loader.html'))
})
app.get('/dashboard', (req,res) => {
    res.sendFile(path.join(__dirname, '/dashboard.html'));
})

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname, '/contact.html'));
})

app.get('/docs', (req,res) => {
    res.sendFile(path.join(__dirname, '/docs.html'));
})

app.get('/directory', (req,res) => {
    res.sendFile(path.join(__dirname, '/directory.html'));
})

app.listen(3000, () => {
    console.log('I think its working boss');
});