import axios from 'axios';
import jwt from 'jsonwebtoken';
import getConfig from 'next/config';
import { getSession } from 'next-auth/react';

import logger from '../infra/logger';

const { serverRuntimeConfig } = getConfig();
const { THIRD_PARTY } = serverRuntimeConfig;

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
      const session = await getSession()
      const { data } = await axios.get(url, {
        params,
        headers:{
          authorization: session && session.expires,
          ...headers
        },
        withCredentials: true,
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
        withCredentials: true,
      })
      .catch(errorHandler);
  };

  const postLogin = async (path, body, options = {}) => {
    const { headers = {}, params = {} } = options;
    const url = buildUrl(path);
    return axios
      .post(url, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: jwt.sign(body.token, THIRD_PARTY.AUTH.jwtSecret),
          ...headers,
        },
        params,
        withCredentials: true,
      })
      .catch(errorHandler);
  };

  return {
    get,
    post,
    postLogin,
  };
};

export default createClient;
