const styles = {
  container: {
    flexDirection: 'column',
    m: '0',
    '::before': {
      content: '""',
      backgroundColor: '#f4efeb',
      minHeight: '100vh',
      width: 'auto',
      height: '100%',
      
      opacity: '0.5',
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    },
  },
  content: {
    position: 'relative',
    width: '100%',
    // maxWidth: '1300px',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    m: '0px auto auto auto',
  },
};

export default styles;
