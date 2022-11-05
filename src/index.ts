import * as restify from "restify";

const respond: restify.RequestHandler = (req, res, next) => {
    res.send("hello " + req.params.name);
    next();
};

const server = restify.createServer();
server.pre(restify.plugins.pre.userAgentConnection());
server.get("/hello/:name", respond);
server.head("/hello/:name", respond);

server.listen(process.env.port || process.env.PORT || 8080, () => {
    console.info(`\nServer Started, ${server.name} listening to ${server.url}`);
});