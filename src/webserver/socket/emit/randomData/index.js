const randomDataService = require('../../../../services/randomDataService');

module.exports = (app) => {
  const topicRandomData = 'topicRandomData';

  const emitRandomData = () => {
    const data = randomDataService.getRandomData();
    const response = {
      timeStamp: (new Date()).getTime(),
      data,
    };
    app.io.emit(topicRandomData, response);
  };

  const publishRandomData = () => {
    if (app.get('command') === 'fly') {
      emitRandomData();
    }
  };

  setInterval(
    () => publishRandomData(),
    1000,
  );
};
