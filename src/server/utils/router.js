/**
 * Get absolute resource file path
 *
 * @param {*} url
 * @returns Absolute file resource for router
 */

const index = 'index.html';

// Find the router file based on the request URL
export const getRouter = (root, url) => {
  if (url === '/') {
    return root + index;
  } else {
    return root + url;
  }
};
