const styles = {
  gridContainer: {
    gridTemplateColumns: '2fr 3fr',
    gap: 0,
    boxShadow: '0px 5px 15px 4px rgba(0,0,0,0.1)',
  },
  colOneContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    p: '25px 40px',
  },
  signUpHeading: {
    fontSize: 7,
    color: 'blue',
    textTransform: 'uppercase',
    mt: '30px',
  },
  signUpText: {
    fontSize: 2,
    textAlign: 'center',
    lineHeight: '20px',
    my: '20px',
    whiteSpace: 'pre-line',
  },
  loginImage: { height: '100%', objectFit: 'cover' },
  logo: { width: '100%' },
  helperLink: {
    fontSize: 0,
    color: 'text',
    letterSpacing: '1px',
    textDecoration: 'underline',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: 'blue',
    },
  },
};

export default styles;
