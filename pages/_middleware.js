/* eslint-disable consistent-return */
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import routes from '../constants/routes';

const isAppRoute = (pathname) =>
  !!Object.values(routes)
    ?.filter((el) => typeof el === 'string')
    .find((route) => route.startsWith(pathname));

export async function middleware(req = NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie:
      process.env.NEXTAUTH_URL?.startsWith('https://') ??
      process.env.NEXTAUTH_URL,
  });
  const { pathname } = req.nextUrl;

  if (pathname.includes(routes.api) || !!token || !isAppRoute(pathname)) {
    console.log('here 2');
    return NextResponse.next();
  }

  if (!token && pathname !== routes.login) {
    console.log('here 3');
    const url = req.nextUrl.clone();
    url.pathname = routes.login;
    return NextResponse.rewrite(url);
  }
}
