const request = require('./request');

const { API_PUBLISH_URL } = require('./constants');

/**
 * Publish file
 * @see https://tech.yandex.ru/disk/api/reference/content-docpage/#url-request
 * @param {string} token OAuth token
 * @param {string} path Path to the file
 * @param {function} [success] Success callback
 * @param {function} [error] Error callback
 */
const link = (token, path, success, error) =>
  request.put({
    url: API_PUBLISH_URL,
    token: token,
    query: {
      path
    }
  }, success, error);

module.exports = {
  link
};