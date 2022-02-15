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
    boxShadow: '3px 2px 7px 1px rgba(0,0,0,0.1)',
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
};
