const logger = require('../../../../logger');

class ApiMiddlewareProvider {
  constructor() {
    this.exampleFunction = this.exampleFunction.bind(this);
  }

  /**
   * An example function. API specific middleware can
   * be added here and registered in the module middleware config.
   * @param req
   * @param res
   * @param next
   */
  exampleFunction(req, res, next) {
    logger.info(
      `${ApiMiddlewareProvider.name}@${this.exampleFunction.name}`,
      {
        uuid: req.UUID,
        clazz: ApiMiddlewareProvider.name,
        fn: this.exampleFunction.name,
      },
    );
    // Run some checks on the request
    if (req.body === null) {
      res.status(400).json({ message: 'failed to pass API middleware' });
      // Otherwise pass to the next middleware or handler
    } else next();
  }
}

module.exports = new ApiMiddlewareProvider();
