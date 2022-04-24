const styles = {
  container: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'space-between',
    textAlign: 'right',
    alignItems: 'center',
    minHeight: ['80vh','100vh'],
    p: ['0px 30px', '20px 80px'],
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    clipPath: 'polygon(30% 70% 70% 30% / 30% 30% 70% 70%)',
    maxWidth: ['100%', '550px'],
    height: 'auto',
  },
  arrow: {
    width: '50px',
    height: 'auto',
    mt: ['0px', '80px'],
  },
  brigada:{
    fontFamily:'regular'
  },
};

export default styles;
