const styles = {
  section: {
    height: '80vh',
    maxHeight: '900px',
  },
  container: {
    my: '100px',
    p: '20px 80px',
  },
  row: {
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
    maxWidth: '600px',
    ml: '20px',
    mb: '30px',
  },
  image: {
    clipPath: 'polygon(30% 70% 70% 30% / 30% 30% 70% 70%)',
    maxWidth: '550px',
    height: 'auto',
  },
  arrow: {
    width: '50px',
    height: 'auto',
    mt: '30px',
  },
  icon: {
    width: '80px',
    height: '100%',
    objectFit: 'contain',
  },
  map: {
    width: 'fit-content',
    height: '100%',
    objectFit: 'contain',
  },
  rowCenter: {
    justifyContent: 'center',
  },
};

export default styles;
