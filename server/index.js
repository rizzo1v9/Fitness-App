/* server
*/
const path = require('path');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const { LoginRequired  } = require('./controllers/security');
const usersModel = require('./models/users');


const usersCtrl = require('./controllers/users');
const statusCtrl = require('./controllers/statuses');

const app = express();
const port = process.env.PORT || 3000;

app
   .use(express.json())
   .use(express.static('./docs'))


   .use(async (req, res, next)=>{ 
        
      const token = req.headers.authorization?.split(' ')[1];
      req.user = token && await usersModel.FromJWT(token);
      req.user = { isAdmin: true};
      next();
    }) 



   .use('/users', usersCtrl)
   .use('/statuses', LoginRequired, statusCtrl)
   
    .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'docs/index.html'));
    })


.use((error, req, res, next)=>{
  console.error(error);

    res.status(error.code || 500 );
    res.send( { msg: error.msg });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})