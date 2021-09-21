var Redis = require("ioredis");
const http = require('http');

if (typeof client === 'undefined') {
    var client = new Redis(process.env.REDIS_URL);
}

const requestListener = async function (req, res) {
    if (req.url !== '/favicon.ico') {
        let count = await client.incr("counter");
        res.writeHead(200);
        res.end('Page view:' + count);
    }
}

const server = http.createServer(requestListener);
server.listen(8080);
