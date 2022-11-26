
//Require modules
const express = require('express')
const fs = require('fs')
const path = require('path')

//Server creator
const app = express()

//Listened port
const PORT = 5000;

//Function create path
const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`)


//Server launcher
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log("i'm listen port: " + PORT)
})

//Request listener

//Main page
app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

//Post page
app.get('/post', (req, res) => {
    res.sendFile(createPath('post'))
})

//Create post page
app.get('/create_post', (req, res) => {
    res.sendFile(createPath('create_post'))
})

//File not found catcher
app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'))
})