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
      credentials: {
        weddingId: { label: 'Wedding ID / ID de la Boda', type: 'text' },
      },
      authorize: async (credentials) => {
        const { weddingId } = credentials;
        console.log(
          '🚀 ~ file: [...nextauth].js ~ line 23 ~ authorize: ~ weddingId',
          weddingId,
        );
        try {
          const tokenID = await postVerifyCredentials({
            token: weddingId,
          });
          if (tokenID) {
            const layout = await getLayout();
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
  },
  jwt: {
    maxAge: 5 * 60,
  },
  pages: {
    signIn: '/login',
  },
});
