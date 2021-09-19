/**
 * Include any other external middleware libraries that you want
 * your app to use. Such as cors, morgan etc....
 *
 * IMPORTANT TO NOTE: Middlewares are executed in the order in which
 * they are declared in the array.
 */
const bodyParser = require('body-parser');

const standardMiddleware = () => [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  // cors(),
  // helmet(),
  // etc.. [add external middleware libraries here]
];

module.exports = { standardMiddleware };
