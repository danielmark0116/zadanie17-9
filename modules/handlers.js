const express = require('express');
const fs = require('fs');
var formidable = require('formidable');
const router = express.Router();

router.get('/', (req, res) => {
  // res.sendFile('index');
  let test = 'sdf';
  res.render('index', { test });
});

router.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, function(error, fields, files) {
    if (error) {
      res.send('sth went wrong...');
    } else {
      const fileName = files.upload.name;
      fs.renameSync(files.upload.path, `public/upload/${fileName}`);

      res.render('upload', { imgPath: fileName });
    }
  });
});

module.exports = router;
