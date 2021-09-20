const { v4: uuidv4 } = require('uuid');
const logger = require('../logger');
/**
 * Create custom middleware functions that you want
 * your app to use.
 *
 * IMPORTANT TO NOTE: Remember, custom middleware functions must be declared
 * in the config/middlewares custom mapping in order for them to be registered
 * on application start up
 *
 * Custom middleware are executed in the listing order in config/middlewares
 *
 * Custom middleware will always be executed after any declared standard middleware
 */

class CustomMiddlewareProvider {
  constructor() {
    this.setUniqueReqId = this.setUniqueReqId.bind(this);
  }

  /**
   * An example of a custom middleware function
   * which creates a unique ID for each request
   * to be used by any logging functionality in the app.
   * @param req
   * @param res
   * @param next
   * @returns {*}
   */
  setUniqueReqId(req, res, next) {
    req.UUID = uuidv4();
    logger.info(
      `${CustomMiddlewareProvider.name}@${this.setUniqueReqId.name}`,
      {
        uuid: req.UUID,
        clazz: CustomMiddlewareProvider.name,
        fn: this.setUniqueReqId.name,
      },
    );
    return next();
  }
}

module.exports = new CustomMiddlewareProvider();
