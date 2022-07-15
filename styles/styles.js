export const styles = {
  root: {
    overflowX: 'hidden',
    fontFamily: 'regular',
    lineHeight: 'body',
    fontWeight: 'body',
    scrollBehavior: 'smooth',
    '.custom': {},
    '.form': {
      my: '300px',
    },
    'div.css-1obar3y': {
      display: 'none!important',
    },
    'div[id^=__lpform_]': {
      display: 'none',
    },
  },
  h1: {
    variant: 'text.heading',
    fontSize: [6, '43px'],
    my: ['15px', '25px'],
    textTransform: 'uppercase',
  },
  h2: {
    variant: 'text.heading',
    fontSize: 5,
    whiteSpace: 'pre-wrap',
  },
  h3: {
    variant: 'text.heading',
    fontFamily: 'headingBold',
    fontSize: 3,
    mb: '5px',
    mt: '0px',
    whiteSpace: 'pre-wrap',
  },
  h4: {
    variant: 'text.heading',
    fontSize: 2,
  },
  h5: {
    variant: 'text.heading',
    fontSize: 1,
  },
  h6: {
    variant: 'text.heading',
    fontSize: 0,
  },
  p: {
    color: 'text',
    fontFamily: 'regular',
    fontWeight: 'body',
    lineHeight: 'body',
    fontSize: 1,
    mb: '5px',
  },
  a: {
    textDecoration: 'none',
    color: 'text',
    cursor: 'pointer',
    py: '6px',
    '&:hover': {
      textDecoration: 'underline',
      textUnderlineOffset: '5px',
      textDecorationThickness: '3px',
    },
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit',
    },
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
  },
  img: {
    maxWidth: '100%',
  },
};
