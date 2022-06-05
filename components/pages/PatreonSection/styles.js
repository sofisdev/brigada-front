const styles = {
  container: (src, srcMobile) => ({
    minHeight: ['90vh', '900px'],
    mt: '100px',
    color: 'black',
    textAlign: 'left',
    p: ['85px 20px 0px', '250px 80px'],
    backgroundImage: [`url(${srcMobile || src})`, `url(${src})`],
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'initial',
    width: ['auto', '100vw'],
    maxWidth: ['auto', '100%'],
    maxHeight: ['100%', 'calc(100vh + 85px)'],
  }),
  iban: {
    fontFamily: 'heading',
    whiteSpace: ['pre-wrap', 'normal', 'normal'],
    fontSize: ['18px', '22px', '22px'],
    color: 'inherit',
    p: '10px 0px',
    width: '100%',
    borderRadius: '10px',
    '&:hover': {
      bg: 'yellow',
    },
    textAlign: ['left', 'center', 'center'],
  },
  text: {
    color: 'black',
    whiteSpace: 'pre-wrap',
    fontSize: ['18px', '22px', '22px'],
    textAlign: 'justify',
    lineHeight: '24px',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.5)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.25)',
    p: '20px',
  },
  rowCenter: {
    justifyContent: 'center',
  },
  arrow: {
    width: '50px',
    height: 'auto',
    mt: '0px',
  },
};

export default styles;
