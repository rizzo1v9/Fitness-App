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


   .use((req, res, next)=>{ 

    const token = req.headers.authorization?.split(' ')[1];
    req.user = token && usersModel.FromJWT(token);
    next();
}) 

   .use((req, res, next)=>{
        const token = req.headers.autherization?.split(' ')[1];
        req.user = usersModel.FromJWT(token);
        next();
   })

   .use('/users', usersCtrl)
   .use('/statuses', LoginRequired, statusCtrl)
   
    .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'docs/index.html'));
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})