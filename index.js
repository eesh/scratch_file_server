const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static('public'))

const fs = require('fs');


app.listen(2323, () => {
    console.log('Running on port 2323');
});
