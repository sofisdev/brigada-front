export const buttons = {
  primary: {
    bg: 'cream',
    p: '8px 32px',
    fontSize: 0,
    fontWeight: 'bold',
    borderWidth: '2px',
    borderColor: 'cream',
    borderRadius: '0px',
    borderStyle: 'solid',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      bg: ['cream', 'cream'],
      color: ['white ', 'text'],
    },
    '&:disabled': {
      bg: 'midGrey',
      color: 'white',
      border: 'none',
    },
  },
  transparent: {
    bg: 'transparent',
    color: 'text',
    p: '8px',
    fontSize: 0,
    fontWeight: 'bold',
    border: '0px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      color: 'text',
      bg: 'cream',
    },
    '&:disabled': {
      bg: 'midGrey',
      color: 'white',
      border: 'none',
    },
  },
  close: {
    bg: 'transparent',
    color: 'text',
    p: '8px',
    fontSize: 0,
    fontWeight: 'bold',
    border: '2px solid transparent',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      color: 'text',
      borderColor: 'white',
    },
    '&:disabled': {
      bg: 'midGrey',
      color: 'white',
      border: 'none',
    },
  },
};
