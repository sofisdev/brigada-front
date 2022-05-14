const styles = {
  container: (src) => ({
    height: 'auto',
    maxHeight: '900px',
    my: '100px',
    pb: '170px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
  }),
  formSection: {
    mb: '50px',
  },
  iban: {
    fontFamily: 'regular',
    color: 'inherit',
  },
  text: {
    color: 'inherit',
  },
};

export default styles;
