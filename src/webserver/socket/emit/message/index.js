const emitMessageInit = (app) => (message) => {
  const topicMessage = 'topicMessage';
  const response = {
    timeStamp: (new Date()).getTime(),
    message: message.slice(0, 1024),
  };
  app.io.emit(topicMessage, response);
};

module.exports = emitMessageInit;
