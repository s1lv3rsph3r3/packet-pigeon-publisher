const { v4: uuidv4 } = require('uuid');
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

/**
 * An example of a custom middleware function
 * which creates a unique ID for each request
 * to be used by any logging functionality in the app.
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const setUniqueReqId = (req, res, next) => {
  req.UUID = uuidv4();
  return next();
};

/**
 * Always remember to list additional functions in the module.exports
 * so the function can be accessed on application startup.
 */
module.exports = {
  setUniqueReqId,
};
