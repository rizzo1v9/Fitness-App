const express = require('express');
const users = require('../models/users');
const model = require('../models/statuses');

const app = express.Router();

    app
        .get('/', (req, res)=> {
            res.send(model.GetAll());
            
            
        })
        .get('/:status_id', (req, res)=> res.send(model.Get(req.params.status_id)) )
        .post('/', (req, res) => {
            res.send( model.Add(req.body));
            
        })
        .patch('/:status_id', (req, res) => res.send( model.Updatel(
            req.params.status_id, req.body)))
        .delete('/:status_id', (req, res) => res.send( model.Delete(req.params.status_id)))
        


module.exports = app;