const { v4: uuidv4 } = require('uuid');
const logger = require('../../../logger');

class ModuleMiddlewareProvider {
  constructor() {
    this.generateUniqueRequestId = this.generateUniqueRequestId.bind(this);
    this.logRequest = this.logRequest.bind(this);
  }

  generateUniqueRequestId(req, res, next) {
    req.UUID = uuidv4();
    logger.info(
      `${ModuleMiddlewareProvider.name}@${this.generateUniqueRequestId.name}`,
      {
        uuid: req.UUID,
        clazz: ModuleMiddlewareProvider.name,
        fn: this.generateUniqueRequestId.name,
      },
    );
    next();
  }

  logRequest(req, res, next) {
    logger.info(
      `${ModuleMiddlewareProvider.name}@${this.logRequest.name}`,
      {
        uuid: req.UUID,
        clazz: ModuleMiddlewareProvider.name,
        fn: this.logRequest.name,
      },
    );
    next();
  }
}

module.exports = new ModuleMiddlewareProvider();
