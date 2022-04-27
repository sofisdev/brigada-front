import { keyframes } from '@emotion/react';

const fadeBottom = keyframes({
  from: { transform: 'translateY(150px)', opacity: 0 },
  to: { transform: 'translateY(0)', opacity: 1 },
});

export const styles = {
  root: {
    fontFamily: 'regular',
    lineHeight: 'body',
    fontWeight: 'body',
    scrollBehavior: 'smooth',
    '.reveal': {
      position: 'relative',
      opacity: 0,
    },

    '.reveal.active': {
      animation: `${fadeBottom} 0.6s ease-in`,
      opacity: 1,
    },
    '.custom':{
      
    },
    '.form': {
      my: '300px',
    },
  },

  h1: {
    variant: 'text.heading',
    fontSize: [6, '43px'],
    my: ['15px', '25px'],
    textTransform: 'uppercase'
  },
  h2: {
    variant: 'text.heading',
    fontSize: 5,
  },
  h3: {
    variant: 'text.heading',
    fontSize: 3,
    mb: '5px',
    mt: '0px',
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
    color: 'blue',
    cursor: 'pointer',
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
