export const forms = {
  input: {
    fontSize: 1,
    boxShadow: 'inset 5px 5px 5px #e1e1e1',
    bg: '#f8f8f8',
    border: 'none',
    borderRadius: '0px',
    fontFamily: 'regular',
    color: 'text',
    '&:disabled': {
      opacity: '0.5',
    },
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'regular',
    fontSize: 2,
    letterSpacing: '2px',
    mt: '10px',
    '&:disabled': {
      opacity: '0.5',
    },
  },
  labelDisabled: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'regular',
    fontSize: 2,
    letterSpacing: '2px',
    mt: '10px',
    opacity: '0.5',
  },
  radio: {
    variant: 'forms.input',
    color: 'blue',
    boxShadow: 'none',
    bg: 'transparent',
  },
  checkbox: {
    color: 'blue',
  },
  textarea: {
    variant: 'forms.input',
  },
};
