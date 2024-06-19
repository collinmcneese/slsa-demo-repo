const express = require('express');
const app = express();
const helmet = require('helmet');
const console = require('console');

app.use(helmet());

const cssStyle = `
    body {
        background-color: #000000;
        color: #ffffff;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 24px;
        text-align: center;
    }
    div {
        width: 50%;
        margin: auto;
        border: 2px solid #ffffff;
        padding: 10px;
    }
`;

function routeDefault(req, res) {
  let message = "Hello World!";
  if (Object.keys(req.query).length > 0) {
      message += ` ${JSON.stringify(req.query)}`;
  }
  res.send(`<html><head><style>${cssStyle}</style></head><body><div>${message}</div></body></html>`);
}

app.get('/', (req, res) => {
  routeDefault(req, res);
});

const server = app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

module.exports = {
  routeDefault,
  server,
};
