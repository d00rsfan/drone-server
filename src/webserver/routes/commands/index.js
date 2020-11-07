const { sendCommandMessage } = require('../../../config/keys');

module.exports = (app) => {
  app.post(sendCommandMessage, (req, res) => {
    const { message, command } = req.body;
    app.set('command', command);
    app.emitMessageCommand(message);
    res.send({ status: 'ok' }).status(200);
  });
};
