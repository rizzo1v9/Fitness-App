const express = require('express');
const model = require('../models/users');

const app = express.Router();

    app
        .get('/', (req, res)=> {
            res.send(model.GetAll());
            console.log(req.headers);
            
        })
        .get('/:user_id', (req, res)=> res.send(model.Get(req.params.user_id)) )
        .post('/', (req, res) => {
            res.send( model.Add(
            {
                    firstName: req.body.firstNaame,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    pic: req.body.pic,
            }));
            console.log(req.headers);
        })
        .patch('/:user_id', (req, res) => res.send( model.Updatel(
            req.params.user_id,
            {
                
                    firstName: req.body.firstNaame,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    pic: req.body.pic,
                
            }
        )))
        .delete('/:user_id', (req, res) => res.send( model.Delete(req.params.user_id)))
        


module.exports = app;