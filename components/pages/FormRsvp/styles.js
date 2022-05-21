const styles = {
  section: (bool, src, srcMobile) => ({
    minHeight: bool ? '900px' : 'auto',
    my: '100px',
    backgroundImage: [`url(${srcMobile || src})`, `url(${src})`],
    backgroundRepeat: 'no-repeat',
    backgroundSize: ['contain', 'cover'],
    backgroundPosition: 'initial',
    height: 'auto',
    width: '100vw',
    maxWidth: '100%',
    maxHeight: ['200vh', 'calc(100vh + 85px)'],
    p: '0px',
  }),
  container: {
    my: '100px',
    p: ['10px 30px', '150px 80px'],
  },
  row: {
    height: '50px',
    justifyContent: 'flex-start',
    mb: '30px',
  },
  options: {
    mt: ['10px', '50px'],
    mb: '30px',
    justifyContent: 'space-between',
    width: ['auto', '580px'],
    flexDirection: ['column', 'row'],
  },
  button: {
    mt: '15px',
    mb: '50px',
  },
  spinner: {
    width: '100%',
    mt: '0px',
    mb: '30px',
  },
  formSection: {
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.5)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.25)',
    px: ['20px', '30px'],
    pb: '30px',
    pt: '10px',
  },
  success: {
    textAlign: 'center',
    height: '50vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: '50px',
    height: 'auto',
    mt: '0px',
  },
  rowCenter: {
    justifyContent: 'center',
  },
};

export default styles;
