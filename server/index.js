/* server
*/
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app
    use(express.static('./docs'))
  .get('/', (req, res) => {
    res.send('Hello World!')
    })
    .get('/purim', (req, res) => {
        res.send('Lechaim, to life!');
    })
    .get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'docs/index.html'));
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})