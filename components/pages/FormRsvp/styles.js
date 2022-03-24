const styles = {
  container: (bool) => ({
    minHeight: bool ? '900px' : 'auto',
    height: '80vh',
    my: '100px',
    p: '20px 80px',
  }),
  row: {
    height: '50px',
    justifyContent: 'flex-start',
    mb: '30px',
  },
  options: {
    mt: '50px',
    mb: '30px',
    justifyContent: 'space-between',
    width: '580px',
  },
  button: {
    mt: '15px',
    mb: '50px',
  },
  formSection: {
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.5)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.25)',
    px: '30px',
    pb: '30px',
    pt: '10px',
  },
};

export default styles;
