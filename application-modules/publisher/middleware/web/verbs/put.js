class PutMiddlewareProvider{
    constructor() {
        this.exampleFunction = this.exampleFunction.bind(this);
    }

    exampleFunction(req, res, next){
        // Run some checks on the request
        if(req.body === null){
            req.status(400).json({"message": "failed the put middleware"});
        // Otherwise pass to the next middleware or handler
        } else next();
    }
}

module.exports = new PutMiddlewareProvider();
