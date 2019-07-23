const express = require('express');
const colors = require('colors');
const port = 3000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.listen(port, function() {
  console.log(`Server running on port ${port}`.green.bgMagenta);
});

module.exports = app;
