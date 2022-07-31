const styles = {
  section: {
    maxHeight: ['auto', '900px'],
    position: 'relative',
  },
  container: {
    my: ['50px', '100px'],
    p: ['85px 30px', '20px 80px', '20px 150px'],
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', 'row'],
  },
  rightColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    ml: ['auto', '50px'],
    mt: ['20px', '0px'],
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.5)',
    '-webkit-backdrop-filter': 'blur(10px)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.25)',
    p: '20px',
    maxWidth: ['auto', '40vw', '40vw'],
  },
  street: {
    my: ['15px', '30px'],
    alignItems: 'center',
  },
  text: {
    whiteSpace: 'pre-wrap',
    ml: ['10px', '20px'],
    my: '10px',
    fontFamily: 'light',
    fontSize: '16px',
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
    width: '50px',
    height: '100%',
    objectFit: 'contain',
    mr: ['0px', '20px', '20px'],
  },
  map: {
    width: 'fit-content',
    height: ['auto', '100%'],
    objectFit: 'contain',
    mt: ['20px', '0px'],
  },
  rowCenter: {
    justifyContent: 'center',
  },
  undercase: {
    textTransform: 'capitalize',
  },
};

export default styles;
