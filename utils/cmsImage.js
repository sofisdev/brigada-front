import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const cmsImage = (url) =>
  url.startsWith(publicRuntimeConfig?.THIRD_PARTY?.STRAPI_URL)
    ? `${publicRuntimeConfig?.THIRD_PARTY?.STRAPI_URL}${url}`
    : url;
