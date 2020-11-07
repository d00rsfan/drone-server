module.exports = {
  // webserver configuration start
  port: process.env.PORT || 4001,
  socketIoMaxHttpBufferSize: 2048,
  // webserver configuration - end
  // endpoints - start
  health: '/api/v1/health',
  observerSocketIoPath: '/api/v1/ObserverSocket',
  sendCommandMessage: '/api/v1/SendCommandMessage',
  // endpoints - end
};
