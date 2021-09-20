const logger = require('../../../../../logger');

class DeleteMiddlewareProvider {
  constructor() {
    const { name } = DeleteMiddlewareProvider;
    this.exampleFunction = this.exampleFunction.bind(this);
    this.clazzName = name;
  }

  exampleFunction(req, res, next) {
    logger.info(
      `${this.clazzName}@${this.exampleFunction.name}`,
      {
        uuid: req.UUID,
        clazz: this.clazzName,
        fn: this.exampleFunction.name,
      },
    );
    // Run some checks on request
    if (req.body === null) {
      res.status(400).json({ message: 'failed delete middleware' });
      // Otherwise pass to the next middleware or handler
    } else next();
  }
}

module.exports = new DeleteMiddlewareProvider();
