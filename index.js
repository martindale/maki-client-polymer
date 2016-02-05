module.exports = {
  extends: {
    services: {
      http: {
        //client: __dirname + '/lib/client',
        worker: __dirname + '/lib/worker.js'
      }
    }
  }
};
