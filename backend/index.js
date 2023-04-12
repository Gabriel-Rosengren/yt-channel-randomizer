const express = require('express');
const channel = require('./middleware/channel');
const search = require('./middleware/search');

const app = express();

const port = 8000;

app.use('/channel', channel);
app.use('/search', search);

app.listen(port, () => {
    console.log("Server listening on port %s...", port);
});