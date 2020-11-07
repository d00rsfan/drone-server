const bodyParser = require('body-parser');
const express = require('express');

const commandRouter = require('./webserver/routes/commands');
const healthRouter = require('./webserver/routes/health');
const initSocket = require('./webserver/socket');

const { port } = require('./config/keys');

const app = express();
app.use(bodyParser.json());

commandRouter(app);
healthRouter(app);
const server = initSocket(app);

server.listen(port,
  () => {
    // console.log(`Listening on port ${port}`);
  });
