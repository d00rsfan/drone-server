module.exports = {
  Webserver: {
    port: process.env.PORT || 4001,
    socketIoMaxHttpBufferSize: 2048,
    endpoints: {
      rest: {
        health: '/api/v1/health',
        sendCommandMessage: '/api/v1/SendCommandMessage',
      },
      socket: { observerSocketIoPath: '/api/v1/ObserverSocket' },
    },
  },
};
