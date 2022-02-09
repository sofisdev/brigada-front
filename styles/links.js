export const links = {
  nav: {
    fontSize: 2,
    fontWeight: 'body',
    textTransform: 'uppercase',
    cursor: 'pointer',
    mx: '25px',
    ':hover': {
      color: 'blue',
    },
  },
  user: {
    variant: 'links.nav',
    fontFamily: 'medium',
    fontSize: 1,
    letterSpacing: '2px',
  },
  footer: {
    variant: 'links.nav',
    color: 'background',
    fontSize: 1,
    textDecoration: 'none',
    my: ['10px', '0'],
  },
};
