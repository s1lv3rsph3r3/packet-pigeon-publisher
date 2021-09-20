class DeleteMiddlewareProvider{
    constructor() {
        this.exampleFunction = this.exampleFunction.bind(this);
    }
    exampleFunction(req, res, next){
        // Run some checks on request
        if(req.body === null){
            res.status(400).json({"message": "failed delete middleware"});
        // Otherwise pass to the next middleware or handler
        } else next();
    }
}

module.exports = new DeleteMiddlewareProvider();
