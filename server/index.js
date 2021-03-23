/* server
*/
const path = require('path');
const express = require('express');

const usersCtrl = require('./controllers/users');
const statusCtrl = require('./controllers/statuses');

const app = express();
const port = process.env.PORT || 3000;

app
   .use(express.json())
   .use(express.static('./docs'))

   .use('/users', usersCtrl)
   .use('/statuses', statusCtrl)
   
    .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'docs/index.html'));
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})