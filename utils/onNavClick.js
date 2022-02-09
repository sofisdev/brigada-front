import Router from 'next/router';

export const onNavClick = (item) => () =>
  Router.push({
    pathname: item?.link  });
