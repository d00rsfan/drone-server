const { health } = require('config').get('Webserver.endpoints.rest');

module.exports = (app) => {
  app.get(health, (req, res) => {
    // check infrastructure, if OK
    res.send({ state: 'ok' }).status(200);
  });
};
