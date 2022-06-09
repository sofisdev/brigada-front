import getConfig from 'next/config';

import createClient from '../lib/httpClient';

const { publicRuntimeConfig } = getConfig();
const { THIRD_PARTY } = publicRuntimeConfig;

const client = createClient({
  baseURL: `${THIRD_PARTY.PLATFORM_API.baseUrl}/api/v1`,
});

export const postVerifyCredentials = async (body) => {
  const response = await client.postLogin('auth/verify', body);
  return response.data;
};

export const getLayout = async () => client.get('/layout');

export const postForm = async ({ ...body }) => client.post('/form', body);

export default {};
