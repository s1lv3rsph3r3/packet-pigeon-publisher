class IndividualRouteMiddleware{
    constructor() {
        this.routeSpecMiddleware = this.routeSpecMiddleware.bind(this);
    }
    routeSpecMiddleware(req, res, next){
        // Run some checks on your request
        if(req.body === null){
            res.status(400).json({"message": "failed spec route middleware"});
        // Otherwise pass to next middleware or handler
        } else next();
    }
}

module.exports = new IndividualRouteMiddleware();
