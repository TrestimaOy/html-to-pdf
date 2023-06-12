const express = require('express');
const bodyParser = require('body-parser');
const wkhtmltopdf = require('wkhtmltopdf');

const app = express();

const MAX_BODY_SIZE_MB = process.env.MAX_BODY_SIZE_MB || 128;
console.log(`Setting maximum body size to: ${MAX_BODY_SIZE_MB}MB`);

app.use(bodyParser.json( { limit: `${MAX_BODY_SIZE_MB}mb` }));

app.post('/', (req, res) => {
  res.setHeader('content-type', 'application/pdf');
  wkhtmltopdf(req.body.content, req.body.options).pipe(res);
});

app.listen(8080, function () {
  console.log('App listening on port 8080');
});