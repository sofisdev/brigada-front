const styles = {
  text: {
    color: 'white',
    textAlign: 'center',
  },
  colOneContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    p: ['25px 10px', '25px 40px'],
    borderRadius: '20px',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    div: {
      mr: '0px',
    },
  },
  button: {
    width: '100%',
    mt: '20px',
  },
  errorForm: {
    width: '100%',
    p: '5px',
    bg: '#CB704A',
    textAlign: 'center',
    borderRadius: '10px',
    color: 'white',
    mb: '20px',
  },
  spinner: {
    width: '100%',
    mt: '10px',
    color: 'white',
  },
  inputWrapper: {
    position: 'relative',
  },
  iconPassword: {
    position: 'absolute',
    width: '26px',
    top: '58%',
    right: '3%',
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

export default styles;
