const styles = {
  container: (src) => ({
    maxHeight: '900px',
    my: '100px',
    backgroundImage: ['', `url(${src})`],
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['contain', 'auto'],
    backgroundPosition: ['center', 'center top 30px'],
    color: 'black',
    textAlign: 'left',
    p: ['85px 20px 130px', '250px 300px'],
  }),
  iban: {
    fontFamily: 'regular',
    color: 'inherit',
    p: '10px 0px',
    width: '100%',
    borderRadius: '10px',
    '&:hover': {
      bg: 'yellow',
    },
  },
  text: {
    color: 'black',
    whiteSpace: 'pre-wrap',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: ['rgba(255,255,255,0.5)', 'none'],
    '-webkit-backdrop-filter': ['blur(10px)', 'none'],
    backdropFilter: ['blur(10px)', 'none'],
    border: ['1px solid rgba(255,255,255,0.25)', '0px'],
    p: ['20px', '0px'],
    borderRadius: ['20px', '0px'],
  },
};

export default styles;
