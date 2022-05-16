const styles = {
  container: (src) => ({
    maxHeight: '900px',
    my: '100px',
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'center top 30px',
    color: 'white',
    textAlign: 'center',
    p:'250px'
  }),
  iban: {
    fontFamily: 'regular',
    color: 'inherit',
  },
  text: {
    color: 'inherit',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default styles;
