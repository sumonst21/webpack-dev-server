'use strict';

const runServer = require('./helpers/run-server');
const config = require('./fixtures/simple-config/webpack.config');

describe('Lazy', () => {
  afterEach(runServer.close);

  it('without filename option it should throw an error', () => {
    expect(() => {
      runServer.start(config, {
        lazy: true,
      });
    }).toThrow(/'filename' option must be set/);
  });

  it('with filename option should not throw an error', (done) => {
    runServer.startBeforeCompilation(
      config,
      {
        lazy: true,
        filename: 'bundle.js',
      },
      done
    );
  });
});
