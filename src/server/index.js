/**
 * Create web server using basic node.js http library
 */
const http = require('http');
const fs = require('fs');

// request handler
const requestListener = (req, res) => {
  // Current working directly
  console.log('working directly', {
    cwd: process.cwd(),
    __dirname,
    __filename,
  });

  // Server index file
  const file = './public/index.html';
  fs.readFile(
    file,
    {
      encoding: 'utf8',
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
