import Router from 'next/router';

export const onNavClick = (item, invitationId) => () =>
  Router.push({
    pathname: item?.link,
    query: item?.parameters ? { invitationId } : {},
  });
