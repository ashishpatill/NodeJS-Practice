const express = require('express');
const app = express();
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/student', studentRoute)
app.use('/faculty', facultyRoute)

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.m4ibu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.on('error', err => {
    console.log('connection failed')
})

mongoose.connection.on('connected', res => {
    console.log('connected with mongodb atlas')
})

app.use((req, res, next) => {
    res.status(404).json({
        error: 'bad request'
    })
})

module.exports = app;
