const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static('public'))

var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const fs = require('fs');

app.get("/extension/:apikey/:modelid", (req, res) => {
    var apikey = req.params.apikey;
    var model_id = req.params.modelid;

    res.contentType('application/javascript');
    res.charset = 'UTF-8';
    res.render('extension', {
      CLARIFAI_KEY: apikey,
      MODEL_ID: model_id
    });
});


app.listen(2323, () => {
    console.log('Running on port 2323');
});
