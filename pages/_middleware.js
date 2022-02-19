/* eslint-disable consistent-return */
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import routes from '../constants/routes';

const isAppRoute = (pathname) =>
  !!Object.values(routes)
    ?.filter((el) => typeof el === 'string')
    .find((route) => route.startsWith(pathname));

export async function middleware(req = NextRequest) {
  console.log("🤓🤓 ~ file: _middleware.js ~ line 13 ~ middleware ~ req", req)
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie:
      process.env.NEXTAUTH_URL?.startsWith('https://') ??
      process.env.NEXTAUTH_URL,
  });
  console.log("🚀 ~ file: _middleware.js ~ line 21 ~ middleware ~ token", token)
  const { pathname } = req.nextUrl;
  console.log("🔥🔥 ~ file: _middleware.js ~ line 23 ~ middleware ~ pathname", pathname)
  if (pathname.includes(routes.api) || !!token || !isAppRoute(pathname)) {
    return NextResponse.next();
  }

  if (!token && pathname !== routes.login) {
    console.log('TEST LOG ✅');
    return NextResponse.rewrite(new URL(`/${routes.login}`, req.url));
  }
}
