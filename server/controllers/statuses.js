const express = require('express');
const users = require('../models/users');
const model = require('../models/statuses');

const app = express.Router();

    app
    app
    .get('/', (req, res)=>{
        res.send( model.GetAll() );         

        if(req.user.isAdmin){
            res.send( model.GetAll() );
        }else{
            res.send( model.GetWall(req.user.handle) );
        }

    }  )
    .get('/:status_id',(req, res)=> {

        if(+req.params.status_id){
            res.send( model.Get(req.params.status_id) )
        }else{
            res.send( model.GetWall(req.params.status_id) )
        }

    })
        .post('/', (req, res) => {

            req.body.user_email = req.user.email;
            res.send( model.Add(req.body));
            
        })
        .patch('/:status_id', (req, res) => res.send( model.Updatel(
            req.params.status_id, req.body)))
            
        .delete('/:status_id', (req, res) => res.send( model.Delete(req.params.status_id)))
        


module.exports = app;