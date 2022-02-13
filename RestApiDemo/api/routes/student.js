const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const studentSchema = require('../model/studentSchema');

router.get('/', (req, res, next) => {
    // res.status(200).json({
    //     msg: 'student get request received'
    // })

    studentSchema.find()
    .then(result=> {
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=> {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

router.post('/', (req, res, next) => {
    console.log(req.body);
    const student = new studentSchema({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        marks: req.body.marks
    })

    student.save()
    .then(result => {
        console.log(result)
        res.status(200).json({
            newStudent: result
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;