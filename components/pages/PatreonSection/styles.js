const styles = {
  container: (src) => ({
    maxHeight: '900px',
    my: '100px',
    backgroundImage: ['', `url(${src})`],
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['contain', 'auto'],
    backgroundPosition: ['center', 'center top 30px'],
    color: ['black', 'white'],
    textAlign: 'center',
    p: ['120px 20px', '250px'],
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
    background: 'rgba(255,255,255,0.5)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.25)',
    p: '20px',
    borderRadius: '20px',
  },
};

export default styles;
