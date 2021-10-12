// TODO: Implement connection to redis
// const redis = require('redis');

const logger = require('../../../../logger');
const { formatFunctionName } = require('../../../../utility/format-utility');

class MessageController {
  constructor() {
    const { name } = MessageController;
    this.createMessage = this.createMessage.bind(this);
    this.clazzName = name;
  }

  /**
   * Handle the creation of a new message.
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async createMessage(req, res) {
    const message = `${this.clazzName}@${formatFunctionName(
      this.createMessage.name,
    )}`;
    const meta = {
      uuid: req.UUID,
      clazz: this.clazzName,
      fn: formatFunctionName(this.createMessage.name),
    };
    logger.info(message, {
      ...meta,
      msg: 'Attempting to handle message request...',
      body: req.body,
    });
    // TODO: Implement publisher to redis
    // const publisher = redis.createClient();
    // Check if the message has the following:
    //   1. Channel - not necessary for MVP
    //   2. Event - Required
    //   3. Data - Required
    if (req.body.channel !== 'DEFAULT') {
      return res
        .status(400)
        .json('Bad input - expected req.body.channel to be DEFAULT.');
    }

    if (
      req.body.event === undefined ||
      req.body.event === null ||
      req.body.event === ''
    ) {
      return res
        .status(400)
        .json('Bad input - expected req.body.event to be non empty.');
    }

    if (
      typeof req.body.event !== 'string' &&
      !(req.body.event instanceof String)
    ) {
      return res
        .status(400)
        .json('Bad input - expected req.body.event to be a string.');
    }
    let parsedData;
    try {
      parsedData = JSON.parse(JSON.stringify(req.body.data));
    } catch (e) {
      return res
        .status(400)
        .json('Bad input - expected req.body.data to be valid JSON.');
    }

    const publishData = {
      channel: 'DEFAULT',
      evt: req.body.event,
      data: parsedData,
    };
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(publishData));
    // TODO: Implement connection to the publisher
    // publisher.publish('DEFAULT', JSON.stringify(publishData));
    return res.status(200).json('Success - Message Logged.');
  }
}

module.exports = new MessageController();
