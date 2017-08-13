const express = require('express');

const app = express();
const post = require('./aspace.js/src/post');
const get = require('./aspace.js/src/get');

app.use('/aspace', post);
app.use('/aspace', get);
app.use('/anitize', express.static(`${__dirname}/anitize.js/dist`));
app.use('/uploads', express.static(`${__dirname}/../uploads`));
app.use('/manage', express.static(`${__dirname}/manage`));
app.use('/applications', express.static(`${__dirname}/applications`));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
