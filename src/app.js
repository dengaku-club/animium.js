const express = require('express');

const app = express();
const post = require('./aspace.js/src/post');
const get = require('./aspace.js/src/get');

app.use('/aspace', post);
app.use('/aspace', get);
app.use('/anitize', express.static(`${__dirname}/anitize.js/dist`));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
