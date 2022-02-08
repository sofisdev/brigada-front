import getConfig from 'next/config';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { jwtCallback, sessionCallback } from '../../../lib/nextAuth';
import {
  getLayout,
  postVerifyCredentials,
} from '../../../repository/platformApi';

const { serverRuntimeConfig } = getConfig();
const { THIRD_PARTY } = serverRuntimeConfig;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      authorize: async (credentials) => {
        const { weddingId } = credentials;
        try {
          const tokenID = await postVerifyCredentials({
            token: weddingId,
          });
          if (tokenID) {
            const layout = await getLayout();
            return layout;
          }
        } catch (error) {
          console.log(error.message, 'authorize error');
        }
        return null;
      },
    }),
  ],
  secret: THIRD_PARTY.AUTH.authSecret,
  callbacks: {
    jwt: jwtCallback,
    session: sessionCallback,
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 1 * 1,
  },
  jwt: {
    maxAge: 60 * 60 * 1 * 1,
  },
  pages: {
    signIn: '/login',
  },
});
