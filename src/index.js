const bodyParser = require('body-parser');
const express = require('express');
const webConfig = require('config').get('Webserver');

const commandRouter = require('./webserver/routes/commands');
const healthRouter = require('./webserver/routes/health');

const initSocket = require('./webserver/socket');

const app = express();
app.use(bodyParser.json());

commandRouter(app);
healthRouter(app);
const server = initSocket(app);

server.listen(webConfig.port,
  () => {
    // console.log(`Listening on port ${webConfig.port}, ${process.env.NODE_ENV}`);
  });
