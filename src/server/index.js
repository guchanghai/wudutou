/**
 * Create web server using basic node.js http library
 */
const http = require('http');

// request handler
const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('wudutou website start running!');
};

// create server
const server = http.createServer( requestListener );

// launch server
server.listen(3000);
