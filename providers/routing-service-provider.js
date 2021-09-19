const app = require('../app');
const { printEndpoints } = require('../utility/endpoint-utility');

/**
 * Utility function to add an express router
 * to an existing application during runtime
 * @param routerNamespace
 * @param router
 */
const addRouter = (routerNamespace, router) => {
  app.use(routerNamespace, router);
  printEndpoints();
};

module.exports = {
  addRouter,
};
