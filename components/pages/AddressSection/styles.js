const styles = {
  container: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // flexDirection: 'column',
    // alignItems: 'center',
    minHeight: '80vh',
    mb: '80px',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    ml: '50px',
  },
  street: {
    mb: '30px',
  },
  text: {
    width: '600px',
    maxWidth: 'auto',
    ml: '20px',
  },
  image: {
    clipPath: 'polygon(30% 70% 70% 30% / 30% 30% 70% 70%)',
    maxWidth: '550px',
    height: 'auto',
  },
  arrow: {
    width: '50px',
    height: 'auto',
    mt: '80px',
  },
  icon: {
    width: '80px',
    height: '100%',
    objectFit: 'contain',
  },
};

export default styles;
