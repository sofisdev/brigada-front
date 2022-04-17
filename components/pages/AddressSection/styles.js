const styles = {
  section: {
    maxHeight: '900px',
    position:'relative'
  },
  container: {
    my: ['50px', '100px'],
    p: ['20px 30px', '20px 80px'],
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
    p:'20px'
  },
  street: {
    mb: ['15px', '30px'],
  },
  text: {
    ml: ['10px', '20px'],
    mb: ['10px', '30px'],
    fontFamily:'light'
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
    mt: ['20px', '0px'],
  },
  rowCenter: {
    justifyContent: 'center',
  },
};

export default styles;
