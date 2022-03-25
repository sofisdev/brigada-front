const styles = {
  container: {
    flexDirection: 'column',
    position: 'relative',

    m: '0',
    '::before': {
      content: '""',
      backgroundColor: '#f4efeb',
      minHeight: '100vh',
      width: 'auto',
      height: '100%',
      zIndex: '-2',
      opacity: '0.5',
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  },
  content: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    m: '0px auto auto auto',
  },
};

export default styles;
