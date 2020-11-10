const http = require('http');
const socketIo = require('socket.io');
const webConfig = require('config').get('Webserver');
const emitMessageCommandInit = require('./emit/message');

const randomDataEmitter = require('./emit/randomData');

const { socketIoMaxHttpBufferSize } = webConfig;
const { observerSocketIoPath } = webConfig.endpoints.socket;

module.exports = (app) => {
  const server = http.createServer(app);
  const io = socketIo(server, {
    maxHttpBufferSize: socketIoMaxHttpBufferSize,
    path: observerSocketIoPath,
    perMessageDeflate: true,
  });
  // eslint-disable-next-line no-param-reassign
  app.io = io;
  // eslint-disable-next-line no-param-reassign
  app.emitMessageCommand = emitMessageCommandInit(app);

  io.on('connection', (socket) => {
    // logstash('New client connected', socket.id);
    socket.on('disconnect', () => {
      // logstash('Client disconnected', socket.id);
    });
  });

  randomDataEmitter(app);
  return server;
};
