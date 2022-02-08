export const jwtCallback = async ({ token, account }) => {
  console.log('🚀 ~ file: nextAuth.js ~ line 2 ~ jwtCallback ~ token', token.iat * 1000);
  console.log(
    '🚀 ~ file: nextAuth.js ~ line 2 ~ jwtCallback ~ token',
    token.exp * 1000,
  );
  return (
    account && {
      ...token,
      accessToken: account.access_token,
      refreshToken: account.refresh_token,
      accessTokenExpires: account.expires_at * 1000,
    }
  );
};

export const sessionCallback = async (params) => {
  console.log(
    '🚀 ~ file: nextAuth.js ~ line 14 ~ sessionCallback ~ params',
    params,
  );
  const { session, token } = params;
  return {
    ...session,
    token,
  };
};
