const { health } = require('../../../config/keys');

module.exports = (app) => {
  app.get(health, (req, res) => {
    // check infrastructure, if OK
    res.send({ state: 'ok' }).status(200);
  });
};
