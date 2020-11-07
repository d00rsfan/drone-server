if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  module.exports = require('./prod');
} else if (process.env.NODE_ENV === 'ci') {
  // eslint-disable-next-line global-require
  module.exports = require('./ci');
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./dev');
}
