#!/usr/bin/env node
const environment = require('./environment');
const { server } = require('./server');
const expressApp = require('./app');
const {
  startWebRouting,
  startApiRouting,
  moduleSpecificBootloader,
} = require('./utility/application-utility');
const { printEndpoints } = require('./utility/endpoint-utility');

// Create the http server
const httpServer = server.startServer(expressApp);

// Start the routing for the predefined modules
startWebRouting(expressApp);

// Start the routing for the API endpoints
startApiRouting(expressApp);

/* This should take records from the database and subscribe to the channels */
moduleSpecificBootloader();

// Let the server listen on a particular port
httpServer.listen(environment.values().appPort, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server listening on ${environment.values().appUrl} : ${
      environment.values().appPort
    }`,
  );
});

printEndpoints();
