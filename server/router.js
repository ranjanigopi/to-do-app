const routes = {
    GET: {},
    POST: {}
};


const get = (route, handler) => {
    routes.GET[route] = handler;
}

const post = (route, handler) => {
    routes.POST[route] = handler;
}

const routeHandler = (request, response) => {
    const handler = routes[request.method][request.url];

    if (handler) {
        handler(request, response);
        return true;
    }
    return false;
}

module.exports.get = get;
module.exports.post = post;
module.exports.routeHandler = routeHandler;
