/**
 * Create web server using basic node.js http library
 */
const http = require('http');
const fs = require('fs');

// Server index file
const resourceFolder = './public/';
const index = 'index.html';

// Find the router file based on the request URL
const getRouter = (url) => {
  if (url === '/') {
    return resourceFolder + index;
  } else {
    return resourceFolder + url;
  }
};

// request handler
const requestListener = (req, res) => {
  // Current working directly
  console.log('working directly', {
    cwd: process.cwd(),
    __dirname,
    __filename,
  });

  // Get router based on the Request URL
  const router = getRouter(req.url);

  // Read router file and response
  fs.readFile(
    router,
    {
      flag: 'r',
    },
    (err, data) => {
      res.writeHead(200);
      res.end(data);
    }
  );
};

// create server
const server = http.createServer(requestListener);

// launch server
server.listen(3000);
