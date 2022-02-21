import Router from 'next/router';

export const onNavClick = (item) => () =>
  Router.push({
    hash: item?.link  });
