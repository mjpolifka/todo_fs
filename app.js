const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/template.html'));
})

app.listen(3000);