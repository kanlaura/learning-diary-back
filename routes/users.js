var express = require('express');
var router = express.Router();
var sql = require('../services/dataService');

router.route('/')
    .get(async function (req, res, next) {
        try {
            let rows = await sql.getTopic()
            res.json(rows)
        } catch (error) {
            console.log(error);
        }
    })
    .post(async function (req, res, next) {
        try {
            console.log(req.body)
            let rows = await sql.createTopic(req.body.title, req.body.description, req.body.timetomaster, req.body.timespent, req.body.source, req.body.startlearningdate, req.body.inprogress, req.body.finishlearningdate)
            res.json(rows)
        } catch (error) {
            console.log(error);
        }
    })


    .delete(async function (req, res, next) {
        try {
            let rows = await sql.deleteAll()
            res.json(rows)
        } catch (error) {
            console.log(error);
        }
    })

router.route('/:id')
    .get(async function (req, res, next) {
        try {
            let rows = await sql.getOneTopic(req.params.id)
            res.json(rows)
        } catch (error) {
            console.log(error);
        }
    })

    .put(async function (req, res) {
        try {
            let rows = await sql.editTopic(req.params.id, req.body.title, req.body.description, req.body.timetomaster, req.body.timespent, req.body.source, req.body.startlearningdate, req.body.inprogress, req.body.finishlearningdate)
            res.json(rows)
        } catch (error) {
            console.log(error)
        }
    })

    .delete(async function (req, res, next) {
        try {
            let rows = await sql.deleteTopic(req.params.id)
            res.json(rows)
        } catch (error) {
            console.log(error);
        }
    })

module.exports = router;