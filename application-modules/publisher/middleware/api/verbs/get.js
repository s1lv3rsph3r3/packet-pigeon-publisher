class GetMiddlewareProvider{
    constructor() {
        this.exampleFunction = this.exampleFunction.bind(this);
    }
    exampleFunction(req, res, next){
        // Run checks on the request
        if(req.body === null){
            res.status(400).json({"message": "failed get middleware"});
        // Otherwise pass to the next middleware or handler
        } else next();
    }
}

module.exports = new GetMiddlewareProvider();
