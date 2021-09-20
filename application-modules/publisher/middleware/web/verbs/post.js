class PostMiddlewareProvider{
    constructor() {
        this.exampleFunction = this.exampleFunction.bind(this);
    }
    exampleFunction(req, res, next){
        // Run some checks on the body
        if(req.body === null){
            res.status(400).json({"message": "failed post middleware"});
        // Otherwise pass to next middleware or handler
        } else next();
    }
}

module.exports = new PostMiddlewareProvider();
