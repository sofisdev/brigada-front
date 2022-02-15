import axios from 'axios';

import logger from '../infra/logger';

const errorHandler = (error) => {
  if (error.response) {
    logger.error(
      `Unable to ${error.request.method} ${error.config.url}: ${JSON.stringify(
        error.response.data,
      )}`,
    );
    // return error.response.data;
  }
  if (error.request) {
    logger.error(
      `Unable to ${error.config.method.toUpperCase()} ${error.config.url}: ${
        error.message
      }`,
    );
  } else {
    logger.error(`Error: ${error.message}`);
  }
  throw error;
};

const createClient = ({ baseURL }) => {
  const buildUrl = (path) =>
    baseURL + (path.startsWith('/') ? path : `/${path}`);

  const get = async (path, { params = {}, headers = {} } = {}) => {
    try {
      const url = buildUrl(path);
      const { data } = await axios.get(url, {
        params,
        headers,
      });
      return data;
    } catch (error) {
      return errorHandler(error);
    }
  };

  const post = async (path, body, options = {}) => {
    const { headers = {}, params = {} } = options;
    const url = buildUrl(path);
    return axios
      .post(url, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
        params,
      })
      .catch(errorHandler);
  };

  return {
    get,
    post,
  };
};

export default createClient;
