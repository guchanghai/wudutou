/**
 * Create web server using basic node.js http library
 */

// CommonJS / NodeJS
// const http = require('http');
// const fs = require('fs');
// const routerUtil = require('./utils/router');

// ES6
// see https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b
import * as http from 'http';
import * as fs from 'fs';
import { getRouter } from './utils/router.js';

// Server index file
const resourceFolder = './public/';

// request handler
const requestListener = (req, res) => {
  // Current working directly
  // console.log('working directly', {
  //   cwd: process.cwd(),
  //   __dirname,
  //   __filename,
  // });

  // Get router based on the Request URL
  const router = getRouter(resourceFolder, req.url);

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
