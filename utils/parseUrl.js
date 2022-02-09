function parseUrl(url) {
  const locale = url.includes('?')
    ? url.split('?')[0].split('/')[1]
    : url.split('/')[1];
  return {
    locale,
    url,
  };
}
export default parseUrl;
